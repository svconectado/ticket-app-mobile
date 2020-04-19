import { Injectable, ApplicationRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AlertController } from '@ionic/angular';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateAppService {

  constructor(
    private swUpdate: SwUpdate,
    private appRef: ApplicationRef,
    private alertController: AlertController
  ) {
    const appIsStable$ = appRef.isStable.pipe(first(
      isStable => isStable === true
    )).subscribe(
      () => this.checkForUpdate(),
      (error) => console.log(
        'An error occurred while appIsStable$ was running.\n',
        error
      )
    );
  }

  searchUpdate() {
    this.swUpdate.available.subscribe(value => {
      this.requestUpdate();
    });
  }

  isEnabled() {
    return this.swUpdate.isEnabled;
  }

  async requestUpdate() {
    const alert = await this.alertController.create({
      header: 'Actualizar',
      message: 'Hay una nueva versión disponible.<br><strong>¿Deseas actualizar?</strong>',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('The update was canceled.');
          }
        },
        {
          text: 'Sí',
          handler: () => {
            this.updateNow();
          }
        }
      ]
    });
    await alert.present();
  }

  checkForUpdate() {
    if (this.isEnabled()) {
      this.swUpdate.checkForUpdate().then(() => {
          console.log('Checking for updates...');
      }).catch((err) => {
          console.error('An error occurred while checking for updates.\n', err);
      });
    }
  }

  updateNow() {
    console.log('Updating to the latest version.');
    this.swUpdate.activateUpdate().then(
      () => {
        setTimeout(() => window.location.reload(), 2000);
      }
    );
  }
}
