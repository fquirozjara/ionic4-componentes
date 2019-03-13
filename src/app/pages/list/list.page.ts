import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;
  @ViewChild('Lista') lista: IonList;
  constructor( private dataService: DataService,
               private _toastCtrl: ToastController) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsers();
  }

  async presentToast( message: string) {
    const toast = await this._toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  share(data) {
    this.presentToast('Compartiste este item!');
    this.lista.closeSlidingItems();
  }
  borrar(data) {
    this.presentToast('Se borró el item');
    this.lista.closeSlidingItems();
  }
  favorite(data) {
    this.presentToast('Se guardó en favoritos');
    this.lista.closeSlidingItems();
  }

}
