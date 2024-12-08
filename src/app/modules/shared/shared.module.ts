import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { ShadowDirective } from './directives/shadow.directive';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { FormErrorsComponent } from './components/form-errors/form-errors.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    ShadowDirective,
    ErrorMessageComponent,
    FormErrorsComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ShadowDirective,
    ErrorMessageComponent,
    FormErrorsComponent,
    CardComponent,
    TranslateModule
  ]
})
export class SharedModule { }
