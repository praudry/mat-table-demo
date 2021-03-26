import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MTableComponent } from './components/table/m-table/m-table.component';
import { TableContainerComponent } from './components/table/table-container/table-container.component';
import { AgeColumnComponent } from './components/table/columns/age-column/age-column.component';
import { EmailColumnComponent } from './components/table/columns/email-column/email-column.component';
import { NameColumnComponent } from './components/table/columns/name-column/name-column.component';

@NgModule({
  declarations: [
    AppComponent,
    MTableComponent,
    TableContainerComponent,
    AgeColumnComponent,
    EmailColumnComponent,
    NameColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
