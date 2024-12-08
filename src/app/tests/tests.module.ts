import { NgModule } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    RouterModule.forRoot([]),
    TranslateModule.forRoot({}),
  ],
  exports: [
    HttpClientTestingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class TestsModule { }
