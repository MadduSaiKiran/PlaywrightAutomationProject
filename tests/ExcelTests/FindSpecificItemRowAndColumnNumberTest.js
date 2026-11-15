const ExcelJS = require('exceljs');
async function firstExcelDemoTest() {
  const keyItem = "Apple";
  var output = {row: -1, column: -1};
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile("./TestData/excelTestData.xlsx");
  const worksheet = workbook.getWorksheet("Sheet1");

  if (!workbook) {
    console.log("Work Sheet not found!!!");
  }
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      
      if(cell.value === keyItem){
        output.row = rowNumber;
        output.column = colNumber;
      }
      
    });
  });
  
  if(output.row === -1 || output.column === -1){
    console.log(keyItem + " Item Not Found!!!")
  }
  else{
    console.log("Item Found!!! "+ keyItem + " present in " + "( " + output.row + ", " + output.column  +" )" + " location.");
  }

}
firstExcelDemoTest();