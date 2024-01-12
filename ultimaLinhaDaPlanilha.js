function onOpen(){
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let lastRow = ss.getLastRow() + 1;

  ss.getRange('A' + lastRow).activate();

  console.log(lastRow)
}
