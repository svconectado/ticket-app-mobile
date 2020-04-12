import { LoadingController } from '@ionic/angular';

export class Loading {
  loading: HTMLIonLoadingElement;

  constructor(protected loadingCtrl: LoadingController) { }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Por favor espere...'
    });
    await this.loading.present();
  }

  async dismissLoading() {
    await this.loading.dismiss()
    .then(()=>{
      this.loading = null;
      console.log('Loading dismissed!');
    })
    .catch(e => console.log(e));
  }

}
