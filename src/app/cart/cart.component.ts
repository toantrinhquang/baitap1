import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  ten = '';
  gia = '';
  sum: number = 0;

  arrListSp = [
    { id: 1, name: 'Lap gaming', price: '200', action: true },
    { id: 2, name: 'pc gaming', price: '300', action: true }
  ];
  arrCart: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  toCart(sp: any) {
    sp.action = !sp.action
    for (let i = 0; i <= this.arrListSp.length + 1; i++) {
      let item = this.arrListSp[i];
      if(item.action === false){
        this.arrCart.push(item);
        this.sum = this.sum + parseInt(item.price,10);
      }
    }
  }


  removespBuyed(id:any){
    const index =  this.arrCart.findIndex(spBuyed => spBuyed.id === id);
    this.arrCart.splice(index,  1);
  }
  
}
