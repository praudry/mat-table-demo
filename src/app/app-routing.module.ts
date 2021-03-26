import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableContainerComponent } from './components/table/table-container/table-container.component';

const routes: Routes = [
  {
    path: 'apps/table',
    component: TableContainerComponent
  },
  {
    path: '',
    redirectTo: '/apps/table',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
