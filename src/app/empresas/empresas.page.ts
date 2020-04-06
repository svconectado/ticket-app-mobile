import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.page.html',
  styleUrls: ['./empresas.page.scss'],
})
export class EmpresasPage implements OnInit {


  empresas: string[] = ["Banco Agricola", "Banco Cuscatlan", "Banco Davivienda"]
  constructor() { }

  ngOnInit() {
  }

}
