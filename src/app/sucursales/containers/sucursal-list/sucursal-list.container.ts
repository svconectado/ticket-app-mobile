import { Component, OnInit, Input } from '@angular/core';
import { Sucursal } from '@core/models/sucursal.model';
import { SUCURSALES } from '@core/const/sucursal.const';
import { Empresa } from '@core/models/empresa.model';
import { NavController, LoadingController } from '@ionic/angular';
import { SucursalService } from '@core/services/sucursal.service';
import { ListContainer } from '@shared/containers/list/list.container';

@Component({
  selector: 'app-sucursal-list',
  templateUrl: './sucursal-list.container.html',
  styleUrls: ['./sucursal-list.container.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class SucursalListContainer extends ListContainer<Sucursal> implements OnInit {
  @Input() empresa: Empresa | number;
  private auxSucursales: Sucursal[];
  public searching = false;
  public searchValue = '';
  constructor(
    private navCtrl: NavController,
    private sucursalService: SucursalService,
    protected loadingCtrl: LoadingController,
  ) {
    super(sucursalService, loadingCtrl);
  }

  ngOnInit() {
    // this.getList();
    this.getSucursalList();
  }

  selectedSucursal(sucursal: Sucursal) {
    const empresa = typeof this.empresa === 'number' ? this.empresa: this.empresa?.id;
    this.navCtrl.navigateForward(['empresas', empresa, 'sucursales', sucursal.id]);
  }

  async getSucursalList() {
    await this.presentLoading();
    this.searching = true;
    this.items = SUCURSALES.filter(({empresa}) => {
      const idCurrent = typeof empresa === 'number' ? empresa: empresa?.id;
      const idFilter = typeof this.empresa === 'number' ? this.empresa: this.empresa.id;
      return idCurrent === idFilter;
    });
    this.searching = false;
    this.dismissLoading();
    this.auxSucursales = this.items;
  }

  filterSucursalList($event: Event) {
    this.searching = true;
    this.searchValue = ($event.target as HTMLInputElement).value.trim();
    if (this.searchValue.length > 0)
      this.items = this.items.filter((sucursal: Sucursal) => {
        return (
          sucursal.nombre.toLowerCase().includes(this.searchValue) ||
          sucursal.direccion?.toLowerCase().includes(this.searchValue))
      })
    else
      this.clearSucursalList();
    this.searching = false;
  }

  clearSucursalList() {
    this.searchValue = '';
    this.items = this.auxSucursales;
  }

}
