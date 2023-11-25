import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  qtd:any=0
  constructor() {}
  ngOnChangeView(){
    this.qtd=sessionStorage.getItem('qtd');
  }
}
