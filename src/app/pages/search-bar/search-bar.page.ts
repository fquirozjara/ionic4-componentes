import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {

  albumes: any[] = [];
  textoBuscar = '';

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getAlbums().subscribe( albumes => {
      console.log(albumes);
      this.albumes = albumes;
    });
  }

  buscar( event ) {
    // console.log(event);
    this.textoBuscar = event.detail.value;
  }

}
