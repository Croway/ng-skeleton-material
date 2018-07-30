import { Component, OnInit } from '@angular/core';
import { CustomHttpClient } from '../../../core/CustomHttpClient';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  checked: boolean;
  datepicker: Date;
  input1: string;
  textarea1: string;
  select1: string;
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  slider: number;
  slToggle: boolean;
  constructor(private http: CustomHttpClient) { }

  ngOnInit() {
  }

  testRest() {
    this.http.get('http://www.google.com').subscribe({
      next(result) { console.log('OK: ', result); },
      error(msg) { console.log('Error: ', msg); }
    });
  }

}
