import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent  implements OnInit {

  @Input() qtd:any=0
  apagarCarrinho(){
    localStorage.clear()
  }
  constructor() {}
  ngOnChangeView(){
    this.qtd=sessionStorage.getItem('qtd');
  }

  ngOnInit() {}

}
