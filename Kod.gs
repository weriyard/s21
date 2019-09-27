var source = SpreadsheetApp.getActiveSpreadsheet();
var months_rows = [ "wrzesień", "październik", "listopad", "grudzień", "styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "Razem", "Średnia"]

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
  // K150 is dirty hack for future new congreagation members, and it's faster than getDataRange()
  var people_data = new_sheet.getRange("A2:K150").getValues()
  var cards = HtmlService.createTemplateFromFile("s21.tpl")
  
  cards.people_data = people_data
  cards.months_rows = months_rows
  return cards.evaluate().getContent()
}


function include(File) {
  return HtmlService.createHtmlOutputFromFile(File).getContent();
};