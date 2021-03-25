import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Employee } from 'src/app/types/employee';
import { TableColumn } from 'src/app/types/table-column';

@Component({
  selector: 'app-m-table',
  templateUrl: './m-table.component.html',
  styleUrls: ['./m-table.component.scss']
})
export class MTableComponent implements OnInit {

  readonly tableRows: Employee[] = [
    {
      firstName: 'Pedro',
      lastName: 'Raudry',
      age: 29,
      email: 'praudry@gmail.com'
    },
    {
      firstName: 'Brooke',
      lastName: 'Raudry',
      age: 32,
      email: 'brookeraudry@gmail.com'
    },
    {
      firstName: 'Beverly',
      lastName: 'Raudry',
      age: 20,
      email: 'beverly3005@gmail.com'
    },
    {
      firstName: 'Charlie',
      lastName: 'Raudry',
      age: 84,
      email: 'charlieRaudry@gmail.com'
    }
  ];

  @Input() columnData: TableColumn[];
  @Input() tempRef: TemplateRef<any>;

  public columnsToDisplay: string[];

  constructor() { }

  ngOnInit(): void {
    this.columnsToDisplay = this.columnData.map(column => {return column.columnId});
  }


}
