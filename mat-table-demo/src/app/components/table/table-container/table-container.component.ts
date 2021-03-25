import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableColumn } from 'src/app/types/table-column';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss']
})
export class TableContainerComponent implements OnInit {

  @ViewChild('nameTemp', {static: true}) nameTemplate: TemplateRef<any>;
  @ViewChild('ageTemplate', {static: true}) ageTemplate: TemplateRef<any>;
  @ViewChild('emailTemplate', {static: true}) emailTemplate: TemplateRef<any>;

  public tableColumnDefs: TableColumn[];

  constructor() {}

  ngOnInit(): void {
    this.tableColumnDefs = [
      {
        columnOrder: 1,
        columnId: 'name',
        columnName: 'Name',
        columnContent: this.nameTemplate
      },
      {
        columnOrder: 2,
        columnId: 'age',
        columnName: 'Age',
        columnContent: this.ageTemplate
      },
      {
        columnOrder: 3,
        columnId: 'email',
        columnName: 'Email',
        columnContent: this.emailTemplate
      }
    ]; 
  }
}
