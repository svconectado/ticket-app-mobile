import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-header',
  templateUrl: './basic-header.component.html',
  styleUrls: ['./basic-header.component.scss'],
})
export class BasicHeaderComponent {
  @Input() text: string;
  @Input() title: string;
  @Input() defaultHref = '/';

  constructor() { }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? this.text : '';
  }

}
