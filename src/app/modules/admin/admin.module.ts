import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@/modules/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { NewAuthorComponent } from './components/new-author/new-author.component';
import { AdminService } from './services/admin.service';

@NgModule({
  declarations: [
    AdminComponent,
    NewBookComponent,
    NewAuthorComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
