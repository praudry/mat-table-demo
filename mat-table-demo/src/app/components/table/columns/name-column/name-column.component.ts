import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/types/employee';

@Component({
  selector: 'app-name-column',
  templateUrl: './name-column.component.html',
  styleUrls: ['./name-column.component.scss']
})
export class NameColumnComponent implements OnInit {

  @Input() appDataObject: Employee;

  constructor() { }

  ngOnInit(): void {
    let empTest = this.appDataObject;
  }


}
