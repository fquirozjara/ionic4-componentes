import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  constructor() {}

  fechaNaci: Date = new Date;
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = [
    's\u00f8n',
    'man',
    'tir',
    'ons',
    'tor',
    'fre',
    'l\u00f8r'
  ];
  mesesEsp = [
    {name: 'Enero'},
    {name: 'Febrero'},
    {name: 'Marzo'},
    {name: 'Abril'},
    {name: 'Mayo'},
    {name: 'Junio'},
    {name: 'Julio'},
    {name: 'Agosto'},
    {name: 'Septiembre'},
    {name: 'Octubre'},
    {name: 'Noviembre'},
    {name: 'Diciembre'}
  ];


  customPickerOptions = {
  buttons: [{
    text: 'Save',
    handler: () => console.log('Clicked Save!')
  }, {
    text: 'Log',
    handler: () => {
      console.log('Clicked Log. Do not Dismiss.');
      return false;
    }
  }]
};

  ngOnInit() {
  }
  cambioFecha(event) {
    console.log('ionChange', event);
    console.log('Date', new Date( event.detail.value) );
  }



}
