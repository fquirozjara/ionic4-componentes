import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor( private _modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async abrirModal(){
    const modal = await this._modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        'nombre': 'Felipe',
        'pais': 'Chile'
      }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    console.log('retorno de data: ', data);
  }

}
