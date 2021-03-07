import { Component, OnInit } from '@angular/core';
import { Chocolates } from './sample';
import {HttpClient, HttpClientModule} from'@angular/common/http';

import {ProductService} from '../service/product.service'

@Component({
  selector: 'app-newlaunch',
  templateUrl: './newlaunch.component.html',
  styleUrls: ['./newlaunch.component.css']
})
export class NewlaunchComponent implements OnInit {
  products:Chocolates[] | undefined;
  a:any;
  newproduct:any;
  product:any;
  // newproducts:Chocolates[]=[];


  productService;




  constructor(private http:HttpClient) {

    this.productService=new ProductService();
   }

  ngOnInit(): void {
    this.getProducts();
   this.getitem();
  //  this.getdata();
  }

  getProducts()
  {
      this.products=this.productService.getproducts();

  }


  addToCart(productc: any)
  {
    this.productService.addToCart(productc);

   window.alert('Your product has been added')

  }



  // b:any;
 getitem()
 {
  this.a=this.productService.getItem();
  // this.itm.push(this.a);
  console.log(this.a);
  // localStorage.setItem("array",JSON.stringify(this.a));
  // this.b=(localStorage.getItem("array"));
  // console.log(this.b);

 }

//  getdata()
//  {
//    this.http.get("http://localhost:3000/newproducts").
//    subscribe((product)=>{
//      this.newproduct=product
//      console.log(this.newproduct);
//     //  this.newproducts=this.newproduct;
//      console.log("success")
//     //  console.log(this.newproducts)
//    })
//  }





}



