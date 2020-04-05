import { Injectable } from '@angular/core';

export const CustomBreakpointNames = {
  small: 'small',
  extraSmall: 'extraSmall',
  mediumHanset: 'mediumHandset'
};

@Injectable({
  providedIn: 'root'
})
export class BreakpointsService {
  breakpoints: any = {
    '(min-width: 801px)': CustomBreakpointNames.small,
    '(max-width: 800px)': CustomBreakpointNames.mediumHanset,
    '(max-width: 500px)': CustomBreakpointNames.extraSmall
  }

  constructor() { }


  getBreakpoints(): string[] {
    return Object.keys(this.breakpoints);
  }

  getBreakpointName(breakpointValue: string): string {
    return this.breakpoints[breakpointValue];
  }
}
