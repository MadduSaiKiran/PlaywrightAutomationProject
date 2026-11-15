const ExcelJS = require('exceljs');
async function firstExcelDemoTest() {

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile("./TestData/excelTestData.xlsx");
  const worksheet = workbook.getWorksheet("Sheet1");

  if (!workbook) {
    console.log("Work Sheet not found!!!");
  }
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, cellNumber) => {
      console.log(cell.value);
    });
  });

}
firstExcelDemoTest();