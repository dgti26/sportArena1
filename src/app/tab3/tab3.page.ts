import { Component, OnChanges, OnInit } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { doc, collection, setDoc, Firestore, collectionData, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']

})
export class Tab3Page implements OnInit, OnChanges {

  cliente = sessionStorage.getItem('Usuario')
  fotoCliente = sessionStorage.getItem('fotoPerfil')
  valorTotal: string = '0,00'
  count: number = 0;

  novaqtd: number = Number(localStorage.getItem('qtdCarrinhoStorage'));
  produtos: any = []
  isModalOpen = false;
  produto:any=[]
  setOpen(isOpen: boolean, produto:any, tamanho:any, valor:any, imagem:any, qtd:any, descricao:any) {
    this.isModalOpen = isOpen;
    this.produto[0] = { pNome: produto, pValor: valor, pImg: imagem, tamanho: tamanho , pQtd:qtd, pDescricao:descricao}
    // this.produto[0]=[...this.produto, {pNome:Nome, pDescricao:Descricao, pValor:pValor, pImg:imagem, pQtd:pQtd}]
  }
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
  increment() {
    if (this.count < this.produto[0].pQtd) {
      this.count++;
      const a = (this.produto[0].pValor).replace(",", ".")
      console.log(a * this.count)
      this.valorTotal = String((a * this.count).toFixed(2))
      this.valorTotal = this.valorTotal.replace('.', ',')
    }
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
      const a = (this.produto[0].pValor).replace(",", ".")
      console.log(a * this.count)
      this.valorTotal = String((a * this.count).toFixed(2))
      this.valorTotal = this.valorTotal.replace('.', ',')
    }
  }
  ngOnChanges() {
    this.novaqtd = Number(localStorage.getItem('qtdCarrinhoStorage'))
  }
  async listar() {
    const querySnapshot = await getDocs(collection(this.firestore, "inicial"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()['produto']}`);
      this.produtos = [...this.produtos, { produto: doc.data()['produto'], descricao: doc.data()['descricao'], imagem: doc.data()['imagem'], tamanho: doc.data()['tamanho'], valor: doc.data()['valor'], qtd: doc.data()['qtd'] }]
    });
  }
  async addCarrinho() {
    // const carrinho = {
    //   cliente: '',
    //   fotoCliente: '',
    //   produtos:
    //     {
    //       produto: {
    //         nome: String(this.produto[0].pNome),
    //         descricao: String(this.produto[0].pDescricao),
    //         qtd: String(this.produto[0].pQtd),
    //         valor: String(this.produto[0].pValor),
    //         imagem: String(this.produto[0].pImg)
    //       },
    //     },
    //     valorTotal:String(this.valorTotal)
    // }
    // const document = doc(collection(this.firestore, 'Carrinho'));
    // return setDoc(document, carrinho);
    if (this.cliente !== null) {
      await setDoc(doc(this.firestore, "Carrinho", String(this.cliente)), {
        fotoCliente: String(this.fotoCliente),
        produtos: {
          produto: {
            nome: String(this.produto[0].pNome),
            descricao: String(this.produto[0].pDescricao),
            qtd: String(this.count),
            valor: String(this.produto[0].pValor),
            imagem: String(this.produto[0].pImg)
          },
        },
        valorTotal: String(this.valorTotal)
      });
    } else {
      alert('faça Login')
    }
  }
  constructor(private af: Storage, private firestore: Firestore) { }
}