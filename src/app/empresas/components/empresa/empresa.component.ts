import { Component, OnInit, Input } from '@angular/core';
import { Empresa } from '@core/models/empresa.model';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
})
export class EmpresaComponent implements OnInit {
  @Input() empresa: Empresa;
  defaultImageUrl = 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y';

  constructor() { }

  ngOnInit() {}

}
