import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './service/authentication.service';
import { AuthGuard } from './guards/auth.guard';
import { ApiService } from './service/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import { GlobalTranslationService } from './service/global-translation.service';
import { CustomTranslateService } from './service/custom-translate.service';

export function initApp(auth: AuthenticationService) {
  return () => auth.init();
}

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: (CustomTranslateService)
      },
      isolate: true
    })
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initApp,
    //   deps: [AuthenticationService],
    //   multi: true
    // },
    ApiService,
    TranslateService,
    GlobalTranslationService
  ]
})
export class CoreModule { }
