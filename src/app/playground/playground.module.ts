import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from '../playground/component/playground/playground.component';
import { PlaygroundRoutingModule } from './playground-routing.module';
import {
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatOptionModule,
  MatRadioModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatGridListModule,
  MatSliderModule,
  MatSlideToggleModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,
    FormsModule,
    HttpClientModule,
    PlaygroundRoutingModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatGridListModule,
    MatSliderModule,
    MatSlideToggleModule
  ],
  declarations: [PlaygroundComponent],
  exports: [],
  providers: [
  ]
})
export class PlaygroundModule {
}
