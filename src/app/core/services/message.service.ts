import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(public toastController: ToastController) { }

  async openToast(message: string, duration: number = 3000, closeButtonText: string = 'OK') {
    const toast = await this.toastController.create({
      message,
      duration,
      color: 'dark',
      buttons: [
        {
          text: closeButtonText,
          role: 'cancel'
        }
      ]
    });
    toast.present();
  }

  async openToastWithOptions(toastOptions: any) {
    const toast = await this.toastController.create(toastOptions);
    toast.present();
  }

}
