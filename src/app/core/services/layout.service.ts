import { Injectable } from '@angular/core';
import { BreakpointsService } from './breakpoints.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  activeBreakpoints: string[] = [];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private breakpointService: BreakpointsService
  ) { }

  subscribeToLayoutChanges(): Observable<string[]> {
    return this.breakpointObserver
      .observe(this.breakpointService.getBreakpoints())
      .pipe(map((observeResponse: BreakpointState) => this.parseBreakpointsResponse(observeResponse.breakpoints)));
  }

  parseBreakpointsResponse(breakpoints: { [x: string]: any; }): string[] {
    this.activeBreakpoints = [];

    Object.keys(breakpoints).map((key) => {
      if (breakpoints[key]) {
        this.activeBreakpoints.push(this.breakpointService.getBreakpointName(key));
      }
    });

    return this.activeBreakpoints;
  }

  isBreakpointActive(breakpointName: string) {
    return this.activeBreakpoints.find(breakpoint => breakpoint === breakpointName);
  }
}
