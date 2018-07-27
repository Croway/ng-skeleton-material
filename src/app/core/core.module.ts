import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
  MatIcon
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MenuComponent } from './component/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CoreComponent } from './component/core/core.component';

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
  ],
  declarations: [HomeComponent, HeaderComponent, FooterComponent, MenuComponent, CoreComponent],
  exports: [RouterModule, HomeComponent, BrowserAnimationsModule, CoreComponent],
  providers: []
})
export class CoreModule {
}
