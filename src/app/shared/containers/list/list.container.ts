import { Resource } from '@core/models/resource.model';
import { ResourceService } from '@core/services/resource.service';
import { Loading } from '@shared/components/loading/loading.component';
import { LoadingController } from '@ionic/angular';

export class ListContainer<T extends Resource> extends Loading {
  public items: T[];
  public searching = false;
  protected params: any = {};

  constructor(
    private service: ResourceService<T>,
    protected loadingCtrl: LoadingController
  ) {
    super(loadingCtrl);
  }

  getList() {
    this.searching = true;
    this.presentLoading();
    this.service.getList(this.params).subscribe(async (items: any) => {
      this.items = await items;
      this.searching = false;
      this.dismissLoading();
    });
  }

}
