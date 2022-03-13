//import { FirstDataRenderedEvent, IDetailCellRendererParams } from '@ag-grid-community/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef,  // ColGroupDef,    GridReadyEvent, 
} from 'ag-grid-community';

@Component({
  selector: 'app-axtarish',
  templateUrl: './axtarish.component.html',
  styleUrls: ['./axtarish.component.scss']
})
export class AxtarishComponent implements OnInit { 

  //https://www.ag-grid.com/angular-data-grid/column-definitions/

  public rowData: any[];
  constructor(private http: HttpClient) {  }
  ngOnInit(): void {
       this.http.get<any[]>('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .subscribe(data => {
        this.rowData = data;   
        console.log(this.rowData )      
      });   
      console.log(this.rowData )  
  }
 columnDefs: ColDef[] = [
  { field:  'age', minWidth: 150},
  { field: 'athlete'},
  { field: 'bronze' },
  { field: 'country'  },
  { field: 'date'},
  { field: 'gold' },
  { field: 'silver' },
  { field: 'sport'},
  { field: 'total' },
  { field: 'year' } //, sortable: true
];
public defaultColDef: ColDef = {
  flex: 1,
  sortable: true,
  filter: true,
};
public autoGroupColumnDef: ColDef = {
  // to get 'athlete' showing in the leaf level in this column
  cellRenderer: 'agGroupCellRenderer',
  headerName: 'Athlete',
  minWidth: 200,
  field: 'athlete',
};
// rowData = [
//   { make: 'Toyota', model: 'Celica', price: 35000 },
//   { make: 'Ford', model: 'Mondeo', price: 32000 },
//   { make: 'Porsche', model: 'Boxter', price: 72000 }
// ];
  // onGridReady(_params: GridReadyEvent) {  
  //   this.http.get<any[]>('https://www.ag-grid.com/example-assets/olympic-winners.json')
  //     .subscribe(data => {
  //       this.rowData = data;        
  //     });   
  //     console.log(this.rowData )  
  // }
  title='Axtarış';
 /* public columnDefs: ColDef[] = [
    // group cell renderer needed for expand / collapse icons
    { field: 'name', cellRenderer: 'agGroupCellRenderer' },
    { field: 'account' },
    { field: 'calls' },
    { field: 'minutes', valueFormatter: "x.toLocaleString() + 'm'" },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
  };
  public detailCellRendererParams: any = {
    detailGridOptions: {
      columnDefs: [
        { field: 'callId' },
        { field: 'direction' },
        { field: 'number', minWidth: 150 },
        { field: 'duration', valueFormatter: "x.toLocaleString() + 's'" },
        { field: 'switchCode', minWidth: 150 },
      ],
      defaultColDef: {
        flex: 1,
      },
    },
    getDetailRowData: function (params) {
      params.successCallback(params.data.callRecords);
    },
  } as IDetailCellRendererParams;
  public rowData!: any[];

  constructor(private http: HttpClient) {}

  onFirstDataRendered(params: FirstDataRenderedEvent) {
    // arbitrarily expand a row for presentational purposes
    setTimeout(function () {
      params.api.getDisplayedRowAtIndex(1)!.setExpanded(true);
    }, 0);
  }

  onGridReady(_params: GridReadyEvent) {
    this.http
      .get<any[]>(
        'https://www.ag-grid.com/example-assets/master-detail-data.json'
      )
      .subscribe((data) => {
        this.rowData = data;
        console.log(this.rowData)
      });
  }*/
  

 

  
}

