import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '@/modules/core/components/login/login.component';
import { authGuard } from '@/guards/auth.guard';

const routes: Routes = [{
  path: '',
  redirectTo: '/books',
  pathMatch: 'full'
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'books',
  loadChildren: () => import('@/modules/books/books.module').then((m) => m.BooksModule)
}, {
  path: 'admin',
  canMatch: [authGuard],
  loadChildren: () => import('@/modules/admin/admin.module').then((m) => m.AdminModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
