import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { NewAuthorComponent } from './components/new-author/new-author.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [
    { path: 'new-book', component: NewBookComponent },
    { path: 'new-author', component: NewAuthorComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
