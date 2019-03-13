import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  porcentaje: number;
  constructor() { }

  ngOnInit() {
  }

  cambioRango( event ) {
    this.porcentaje = event.detail.value / 100;
    console.log(this.porcentaje);
  }

}
