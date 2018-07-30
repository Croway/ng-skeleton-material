import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointState, Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { SpinnerService } from '../../spinner/spinner.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver: BreakpointObserver,
      @Inject(SpinnerService) spinnerService,
      @Inject(ViewContainerRef) viewContainerRef) {
    spinnerService.setRootViewContainerRef(viewContainerRef);
  }

  ngOnInit() {
  }

}
