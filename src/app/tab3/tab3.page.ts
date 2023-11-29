import { Component, OnChanges, OnInit } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { doc, collection, setDoc, Firestore, collectionData, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit, OnChanges {

novaqtd:number=Number(localStorage.getItem('qtdCarrinhoStorage'));
produtos:any=[]
  ngOnInit() {
    // listAll(ref(this.af, 'promo')).then(imgs => {
    //   imgs.items.forEach((im) => {
    //     getDownloadURL(im).then((res) => {
    //       this.promos.push(res)
    //     })
    //   })
    // })
    this.listar()
  }
ngOnChanges(){
  this.novaqtd=Number(localStorage.getItem('qtdCarrinhoStorage'))
}
  async listar(){
  const querySnapshot = await getDocs(collection(this.firestore, "inicial"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()['produto']}`);
      this.produtos=[...this.produtos,{produto:doc.data()['produto'], descricao:doc.data()['descricao'], imagem:doc.data()['imagem'], tamanho:doc.data()['tamanho'], valor:doc.data()['valor'], qtd:doc.data()['qtd']}]
    });
  }
  addCarrinho(){
    this.novaqtd=this.novaqtd+1
    localStorage.setItem('qtdCarrinhoStorage', String(this.novaqtd))
  }
  constructor(private af:Storage, private firestore: Firestore) {}


}
