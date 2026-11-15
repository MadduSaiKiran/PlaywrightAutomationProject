const ExcelJS = require('exceljs');
async function firstExcelDemoTest() {
  
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile("./TestData/excelTestData.xlsx");
  const worksheet = workbook.getWorksheet("Sheet1");

  if (!workbook) {
    console.log("Work Sheet not found!!!");
  }
  // Read Data from Excel based on rowNum and colNum
  const cell = worksheet.getCell(3,3);

  //Update data
  cell.value = "Orange";

  //Save Changes
  await workbook.xlsx.writeFile("./TestData/excelTestData.xlsx");

}
firstExcelDemoTest();