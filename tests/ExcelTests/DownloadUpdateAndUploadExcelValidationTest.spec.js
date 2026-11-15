const ExcelJs = require('exceljs');
const { test, expect, chromium, webkit } = require('@playwright/test');

async function writeExcelTest(searchText, replaceText, change, filePath) {

  const workbook = new ExcelJs.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet('Sheet1');

  const output = await readExcel(worksheet, searchText);
  if (output.column !== -1 || output.row !== -1) {
    const cell = worksheet.getCell(output.row, output.column + change.colChange);
    cell.value = replaceText;
    await workbook.xlsx.writeFile(filePath);
  }

}

async function readExcel(worksheet, searchText) {

  let output = { row: -1, column: -1 };
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === searchText) {
        output.row = rowNumber;
        output.column = colNumber;
      }
    })
  })

  return output;
}

test("TC001 - Download Update And Upload Excel Validation Test", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    acceptDownloads: true
  });

  const searchText = "Mango";
  const updateValue = "350";
  const filePath = "C:/Users/madsaikiran/Downloads/download.xlsx";

  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");

  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download" }).click();
  await downloadPromise;
  //filePath or (const download await downloadPromise; download.path();)
  writeExcelTest(searchText, updateValue, { rowChange: 0, colChange: 2 }, filePath);

  await page.locator("#fileinput").click();
  await page.locator("#fileinput").setInputFiles(filePath);

  const textlocator = await page.getByText(searchText);  // Locates Mango text value in UI/table.
  // fetches all rows and filters with the row having Mango text(each row --> column wise one by one searches for Mango if found returns specific row).
  const desiredRow = await page.getByRole('row').filter({ has: textlocator });  
  
  await expect(desiredRow.locator("#cell-4-undefined")).toContainText(updateValue);


});





