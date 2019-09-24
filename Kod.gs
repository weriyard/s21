var source = SpreadsheetApp.getActiveSpreadsheet();
var months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"]

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Drukuj')
  .addItem('S-21', 'dialog')
  .addToUi();
}

function dialog() {
  var active_sheet_name = source.getActiveSheet().getSheetName()
  var html = HtmlService.createTemplateFromFile("dialog.tpl")
  SpreadsheetApp.getUi().showModalDialog(html.evaluate().setWidth(400).setHeight(355), 'Drukuj ' + active_sheet_name)
}

function generate_s21_cards() {
  var new_sheet = source.getSheetByName("Lista kontaktowa Bytom-Radzionków")
  var cards = HtmlService.createTemplateFromFile("s21.tpl")

  return cards.evaluate().getContent()
}


function include(File) {
  return HtmlService.createHtmlOutputFromFile(File).getContent();
};