import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/types/employee';

@Component({
  selector: 'email-column',
  templateUrl: './email-column.component.html',
  styleUrls: ['./email-column.component.scss']
})
export class EmailColumnComponent implements OnInit {

  @Input() appDataObject: Employee;
  public emailString: string;

  constructor() { }

  ngOnInit(): void {
    this.emailString = `mailto:${this.appDataObject.email}`;
  }

}
