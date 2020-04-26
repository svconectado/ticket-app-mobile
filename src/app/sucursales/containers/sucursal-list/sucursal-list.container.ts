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
  public filterList: Sucursal[];
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
    this.params.empresa = typeof this.empresa === 'number' ? this.empresa: this.empresa?.id;
    this.getList();
  }

  selectedSucursal(sucursal: Sucursal) {
    const empresa = typeof this.empresa === 'number' ? this.empresa: this.empresa?.id;
    this.navCtrl.navigateForward(['empresas', empresa, 'sucursales', sucursal.id]);
  }

  filterSucursalList($event: Event) {
    this.searching = true;
    this.searchValue = ($event.target as HTMLInputElement).value.trim();
    if (this.searchValue.length > 0)
      this.filterList = this.items.filter((sucursal: Sucursal) => {
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
    this.filterList = null;
  }

}
