import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@/modules/shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LangSelectorComponent } from './components/lang-selector/lang-selector.component';

@NgModule({
  declarations: [
    LoginComponent,
    NavbarComponent,
    LangSelectorComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavbarComponent,
    LoginComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('The core module cannot be imported twice!');
    }
  }
}
