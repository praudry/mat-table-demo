import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/types/employee';

@Component({
  selector: 'app-age-column',
  templateUrl: './age-column.component.html',
  styleUrls: ['./age-column.component.scss']
})
export class AgeColumnComponent implements OnInit {

  @Input() appDataObject: Employee;

  constructor() { }

  ngOnInit(): void {
  }
}
