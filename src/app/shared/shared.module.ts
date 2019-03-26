import { NgModule, ModuleWithProviders } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { NotificationsBellComponent } from './components/notifications-bell/notifications-bell.component';
import { CoreModule } from '../core/core.module';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { PageLoadingComponent } from './components/page-loading/page-loading.component';
import { RouterModule } from '@angular/router';

@NgModule({
   imports: [
      CoreModule,
      RouterModule
   ],
   declarations: [
      NavigationBarComponent,
      FooterComponent,
      NotificationsBellComponent,
      PageLoadingComponent,
   ],
   exports: [
      NavigationBarComponent,
      FooterComponent,
      NotificationsBellComponent,
      PageLoadingComponent,
   ],
   entryComponents: [
   ],
   providers: []
})
export class SharedModule {
   static forRoot(): ModuleWithProviders {
      return {
         ngModule: SharedModule,
         providers: []
      };
   }
}
