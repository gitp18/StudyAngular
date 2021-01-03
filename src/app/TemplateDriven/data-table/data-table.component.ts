import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild  } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
declare var jQuery:any;


import { UserServiceService } from 'src/app/Services/user-service.service';
import {ExcelService} from 'src/app/Services/excel.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, AfterViewInit, OnDestroy {

	@ViewChild(DataTableDirective, {static: true}) dtElement: DataTableDirective;
	dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  
  listData: any; userMsg = '';

  ajxrequrl: string = 'http://localhost:5000';
  start: number = 0; length: number = 10; draw: number = 1; postparams = {};
  misentrytdth1 = true; misentrytdth2 = true; misentrytdth3 = true; misentrytdth4 = true; misentrytdth5 = true; misentrytdth6 = true;
	misentrytdth7 = false; misentrytdth8 = false; misentrytdth9 = true; misentrytdth10 = true; misentrytdth11 = true; misentrytdth12 = false;
	misentrytdth13 = false; misentrytdth14 = false; misentrytdth15 = false; checkAllbtn = false;
	header = [
		{ header: 'Name', key: 'fname', width: 18},
		{ header: 'User ID', key: 'userid', width: 18 },
		{ header: 'Login ID.', key: 'loginid', width: 15 },
		{ header: 'Email ID', key: 'emailid', width: 15 },
		{ header: 'Contacy', key: 'phone', width: 25},
		{ header: 'Amount', key: 'balance', width: 28 },
		{ header: 'Education', key: 'stream', width: 30 },
		{ header: 'CGPA', key: 'cgpa', width: 20 },
		{ header: 'Years of Exp', key: 'yearsOfExp', width: 20 },
		{ header: 'Gender', key: 'gender', width: 20 },
		{ header: 'Company', key: 'company', width: 20 },
		{ header: 'City', key: 'city', width: 22 },
		{ header: 'State', key: 'state', width: 20 },
		{ header: 'Country', key: 'country', width: 15 },
		{ header: 'Age', key: 'age', width: 30 }
	  ];
	columnrange = ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1', 'K1', 'L1', 'M1', 'N1', 'O1'];

  constructor( private _service: UserServiceService, private _excelService: ExcelService, private _http: HttpClient ) {
    this.getUserList('');
  }

  ngOnInit() {
    this.UIJqueries();
  }

	ngOnDestroy(): void {
		// Do not forget to unsubscribe the event
		this.dtTrigger.unsubscribe();
  }

  rerender(): void {
		this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
			// Destroy the table first
			dtInstance.destroy();
			// Call the dtTrigger to rerender again
			this.dtTrigger.next();
		});
  }
  
  ngAfterViewInit() {
		this.dtTrigger.next();
		this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
			dtInstance.on( 'draw.dt', function () {
				if(jQuery('.dataTables_empty').length > 0) {
					jQuery('.dataTables_empty').remove();
				}
			});
		});
		jQuery(".tdlist_show_checkboxtab").on('click', function(e) {
			e.stopPropagation();
		});
		jQuery(".closecheckboxitem").click(function() {
			jQuery(".tdlist_show_checkboxtab").toggle("");
		});
		$(".columnbtn").on('click', function(e) {
			jQuery(".tdlist_show_checkboxtab").toggle("");
			e.stopPropagation();
		});
		$("body").on('click', function(e) {
			if (e.target.className == ".tdlist_show_checkboxtab") {
			} else {
				$('.tdlist_show_checkboxtab').css("display", "none");
			}
		});
	} 

  getUserList(reqData){
    this._service.getUserList(reqData).subscribe(
      res => {
        this.listData = res;
        this.userMsg = this.listData.length + " record(s) found";
      },
      err => {
        console.log('err: ', err);
        this.userMsg = err.error.message;
      }
    );
  }
  getListData(filterData){
		filterData = {};//{"startDate":this.startDate,"endDate":this.endDate,"zone":this.selectedZone,"state":this.selectedState};
		const that = this;
		this.dtOptions = {
			pagingType: 'full_numbers',
			order: [],
			pageLength: this.length,
			displayStart: this.start,
			autoWidth: false,
			serverSide: true,
			processing: true,
			searching: true,
			ordering: false,

			ajax: (dataTablesParameters: any, callback) => {
				var orderColumn = ''; var orderBy = ''; var order = 0;
				if(dataTablesParameters.order.length) {
					var sortarr = [];
					orderColumn = sortarr[dataTablesParameters.order[0].column]; 
					orderBy = dataTablesParameters.order[0].dir;
					order = 1;
				}	
			
				that.postparams = {
					start: dataTablesParameters.start, 
					length: dataTablesParameters.length, 
					order: order, 
					orderColumn: orderColumn, 
					orderBy: orderBy, 
					search: dataTablesParameters.search
				};
				$('.dataTables_filter label input').attr("placeholder", "Employee");
				$('.dataTables_filter label input').css({'width':'300px','display':'inline-block'});
				this._http.post( that.ajxrequrl+'/userList', that.postparams, {} ).subscribe(
					resp => {
            console.log(resp);
						that.listData = resp['listData'];
						that.start = resp['start'];
						callback({
							recordsTotal: resp['recordsTotal'],
							recordsFiltered: resp['recordsFiltered'],
							data: []
						});
					}, 
					error => {
						console.log(error);
					}	
				);
			}
		}

		// this._dashboardService.getListData(filterData).subscribe(
		// (resp) => {
		// 	this.rerender();
		// 	if(resp['status'] == 0) {
		// 		this.listData = resp['listData'];
		// 	} else {
		// 		this.serverMsg = resp['message'];
		// 	}
		// });
	}
  checkAll(event){
		for(var i=1;i<=15;i++){
			var isChecked=event.target.checked;
			if(isChecked!=false){
				this['checkAllbtn'] = true;
				this['misentrytdth'+i] = true;
			}else{
				if(i==7 || i==8 || i>=12)
					this['misentrytdth'+i] = false;
			}
		}
  }
  
  exportAsXLSX():void {
		var searchVal = 1;
    var searchValue = $('.dataTables_filter input').val();
    let reqdata = {searchVal : searchVal, searchValue : searchValue};
		//let reqdata = {"startDate":this.startDate,"endDate":this.endDate,"zone":this.selectedZone,"state":this.selectedState,"Type":this.Type,"status":this.status};
		this._service.getUserList(reqdata).subscribe(
			res => {
				this._excelService.exportAsExcelFile(res, 'EmpList',this.header, this.columnrange);
			},
			err => {
				this.userMsg = err.error.message;
			}
		);	
  }
  
  UIJqueries(){
		jQuery(".issue-chart-panel-hide").click(function(){
			jQuery(".issuepaneldiv").slideDown();
			jQuery(".issue-chart-panel-show").css("display", "block");
			jQuery(".issue-chart-panel-hide").css("display", "none");
		});
		jQuery(".issue-chart-panel-show").click(function(){
			jQuery(".issuepaneldiv").slideUp();
			jQuery(".issue-chart-panel-show").css("display", "none");
			jQuery(".issue-chart-panel-hide").css("display", "block");
		});
		
		jQuery(".filterchat-panel-hide").click(function(){
			jQuery(".filterchatpaneldiv").slideUp();
			jQuery(".filterchat-panel-show").css("display", "block");
			jQuery(".filterchat-panel-hide").css("display", "none");
		});
		jQuery(".filterchat-panel-show").click(function(){
			jQuery(".filterchatpaneldiv").slideDown();
			jQuery(".filterchat-panel-show").css("display", "none");
			jQuery(".filterchat-panel-hide").css("display", "block");
		});
	}
/*
"userid": 83179,
        "loginid": "8e42b91a-7392-4478-97cb-e5fc80a72b33",
        "isActive": false,
        "emailid": "jennasantana@neptide.com",
        "balance": "$2,469.44",
        "stream": "IT",
        "cgpa": 7.33,
        "yearsOfExp": 8,
        "age": 22,
        "eyeColor": "green",
        "fname": "Callahan",
        "lname": "Horn",
        "gender": "male",
        "company": "ZANYMAX",
        "phone": "+1 (872) 599-2041",
        "state": "Massachusetts",
        "city": "Cloverdale",
        "country": "Christmas Island",
        "address": "883 Dahl Court, 4058",
        "about": "Ex ullamco eu sunt eu minim exercitation reprehenderit tempor cillum amet eiusmod ad. Quis esse eu veniam duis ipsum. Culpa ex veniam mollit mollit exercitation. Voluptate elit voluptate commodo dolore laborum elit commodo ad commodo quis irure non.\r\n",
        "registered": "2020-10-20T02:53:31 -06:-30",
        "latitude": -15.444973,
        "longitude": -44.768475,
        "favoriteFruit": "strawberry"
*/
}
