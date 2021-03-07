import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {Chocolates} from '../newlaunch/sample';
import{OurChocolates} from '../chocolates/sample.chocolate';
import{Cartproduct} from '../cart/sample1';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  items : string[]=[];




  constructor() {


  }
  public getproducts()
  {
    let product : Chocolates[]=[
    {
      img:"p1.png",

      name:"Stawberry chclt",
      price:30
    },
    {
      img:"p2.png",
      name:"Banana Chclt",
      price:20
    },
    {
      img:"p3.png",
      name:"White Chlt",
      price:60
    },
    {
      img:"p4.png",
      name:"Chocopie",
      price:50
    },
    {
      img:"p5.png",
      name:"Peanut Chlt",
      price:30
    },
    {
      img:"p6.png",
      name:"Walnut Chlt",
      price:20
    },
    {
      img:"p7.png",
      name:"EnergyBar",
      price:30
    },
    {
      img:"p8.png",
      name:"Dark Chltx",
      price:30
    },
    {
      img:"p9.png",
      name:"Brownie",
      price:30
    },
    {
      img:"p10.png",
      name:"Almond Chlt",
      price:30
    },
    {
      img:"p11.png",
      name:"Cupcake",
      price:30
    },
    {
      img:"p12.png",
      name:"MilkyBar",
      price:30
    }



  ]
  return product;
}



public OurProduct()
{
  let ourproduct:OurChocolates[]=[
    {
      img:"typ1.jfif",
      name:"Kitkat",
      price:10
    },
    {
      img:"typ2.jfif",
      name:"Galaxy",
      price:10

    },
    {
      img:"typ3.jfif",
      name:"Dove",
      price:10

    },
    {
      img:"typ4.jpg",
      name:"Turkish",
      price:10

    },
    {
      img:"typ5.jfif",
      name:"C C C",
      price:10

    },
    {
      img:"typ6.jpg",
      name:"Ferrero",
      price:10

    },
]
return ourproduct;
}

 //this is the cart function

//  productc:any;

 addToCart(productc: any)
  {
    //console.log(productc);
    this.items.push(productc);
    console.log("hello");
    console.log(this.items);
    localStorage.setItem("name",JSON.stringify(this.items));


  }




  getItem()
  {

      localStorage.getItem("name");
      console.log("This is getitem function");
      console.log(this.items);
      return this.items;
  }


}
