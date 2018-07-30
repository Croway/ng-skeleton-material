import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../spinner/spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
  }

}
