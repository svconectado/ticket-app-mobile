import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss'],
})
export class SearchingComponent {
  @Input() searching: boolean;
  @Input() text = 'Cargando';

  constructor() { }

}
