const ExcelJS = require('exceljs');


const workbook = new ExcelJS.Workbook();
workbook.xlsx.readFile("./TestData/excelTestData.xlsx").then( function () {

  const worksheet = workbook.getWorksheet("Sheet1");

  if (!workbook) {
    console.log("Work Sheet not found!!!");
  }
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, cellNumber) => {
      console.log(cell.value);
    });
  });


});


