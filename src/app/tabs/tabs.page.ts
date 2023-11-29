import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnChanges{
[x: string]: any;
  qtdCarrinho:any=localStorage.getItem('qtdCarrinhoStorage');

ngOnChanges(){
  this.qtdCarrinho=localStorage.getItem('qtdCarrinhoStorage');
  }



  constructor() {}


}
