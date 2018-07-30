import { NgModule, Injector, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTreeModule,
  MatListModule,
  MatIcon,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatDialog
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MenuComponent } from './component/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CoreComponent } from './component/core/core.component';
import { SpinnerService } from './spinner/spinner.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { CustomHttpClient } from './CustomHttpClient';
import { ErrorDialogComponent } from './component/error/error-dialog.component';
import { StartupService } from './service/startup.service';

@NgModule({
  imports: [CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    CoreRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatTreeModule,
    LayoutModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  declarations: [HomeComponent, HeaderComponent, FooterComponent, MenuComponent, CoreComponent, SpinnerComponent, ErrorDialogComponent],
  exports: [RouterModule, HomeComponent, CoreComponent, SpinnerComponent, ErrorDialogComponent],
  providers: [SpinnerService,
    {
      provide: CustomHttpClient,
      useFactory: customHttpClientFactory,
      deps: [HttpClient, SpinnerService, Injector, MatDialog]
    },
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [StartupService],
      multi: true
    }],
  entryComponents: [SpinnerComponent, ErrorDialogComponent]
})
export class CoreModule {
}

export function customHttpClientFactory(http: HttpClient, loader: SpinnerService, injector: Injector, dialog: MatDialog) {
  return new CustomHttpClient(http, loader, injector, dialog);
}

export function startupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();
}
