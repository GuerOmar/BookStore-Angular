import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import { httpDuration } from '@/interceptors/http-duration.interceptor';
import { authInterceptor } from '@/interceptors/auth.interceptor';
import { CoreModule } from '@/modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { translateOptions } from './app.translate';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot(translateOptions),
    CoreModule
  ],
  providers: [
    provideHttpClient(
      withInterceptors([httpDuration, authInterceptor])
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
