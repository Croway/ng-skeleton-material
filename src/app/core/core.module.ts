import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './component/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {CoreRoutingModule} from './core-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MenuComponent } from './component/menu/menu.component';
import { PlaygroundComponent } from '../playground/component/playground/playground.component';

@NgModule({
  imports: [CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    CoreRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule
  ],
  declarations: [HomeComponent, HeaderComponent, FooterComponent, MenuComponent],
  exports: [RouterModule, HomeComponent, BrowserAnimationsModule, HeaderComponent, MenuComponent, FooterComponent],
  providers: []
})
export class CoreModule {
}
