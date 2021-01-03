import {Injectable} from '@angular/core';


import * as ExcelJS from 'exceljs/dist/exceljs.min.js';
import * as FileSaver from 'file-saver';


const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
declare const ExcelJS: any;


@Injectable({
	providedIn: 'root'
})

export class ExcelService {
	workbook: ExcelJS.Workbook;
	worksheet: any;

	constructor() { }

	public exportAsExcelFile(data, file, rowheader, columnrange) {
		var DateObj = new Date();
		var curDate = ('0' + DateObj.getDate()).slice(-2)+ '-' +  ('0' + (DateObj.getMonth() + 1)).slice(-2)+ '-' + DateObj.getFullYear();  
		
		// Create workbook and worksheet
		this.workbook = new ExcelJS.Workbook();
		this.worksheet = this.workbook.addWorksheet(file);
		this.worksheet.columns = rowheader;
		var font = { size: 12, bold: true };
		
		columnrange.map(key => {
			this.worksheet.getCell(key).fill = {
				type: 'pattern',
				pattern: 'solid',
				fgColor: {argb: 'cccccc'}
			};
			this.worksheet.getCell(key).font = font;
		});
		
		this.worksheet.autoFilter = {
			from: columnrange[0],
			to: columnrange[columnrange.length-1],
		}
		this.worksheet.addRows(data);
		
		// Generate Excel File
		this.workbook.xlsx.writeBuffer().then((data) => {
			const blob = new Blob([data], {type: EXCEL_TYPE});
			// Given name
			FileSaver.saveAs(blob, file + '_' + curDate + '.xlsx');
		});
	}
}