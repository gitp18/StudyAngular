import {Injectable} from '@angular/core';
import * as ExcelJS from 'exceljs/dist/exceljs.min.js';
import * as Excel from 'exceljs/dist/exceljs.min.js';
import * as FileSaver from 'file-saver';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

declare const ExcelJS: any;

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  workbook: ExcelJS.Workbook;
  worksheet: any;

  constructor() {
  }

  public generateExcel() {
    // Create workbook and worksheet
    this.workbook = new Excel.Workbook();

    // Set Workbook Properties
    this.workbook.creator = 'Web';
    this.workbook.lastModifiedBy = 'Web';
    this.workbook.created = new Date();
    this.workbook.modified = new Date();
    this.workbook.lastPrinted = new Date();

    // Add a Worksheet
    this.worksheet = this.workbook.addWorksheet('File');

    // Title
    const title = 'Excel file example';

    // Add Row
    this.worksheet.addRow([title]);

    // Generate Excel File
    this.workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], {type: EXCEL_TYPE});
      // Given name
      FileSaver.saveAs(blob, 'download.xlsx');
    });
  }

}
