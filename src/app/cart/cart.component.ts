import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ProductService} from '../service/product.service';
import {HttpClient, HttpClientModule} from'@angular/common/http';

import { Cartproduct } from './sample1';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  a:any;
  b:any;
  newproduct:any;
f:any;
  // productss:Cartproduct[] =[]
  productservice;

  constructor(private http:HttpClient) {

    this.productservice=new ProductService();
  }

  ngOnInit(): void {
    this.getitem();

    // this.getdata();


  }



// }
getitem()
 {
  this.a=localStorage.getItem("name");
  console.log("a is tored")
  console.log(this.a);

  this.b=JSON.parse(this.a);
  console.log(this.b);




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





// }


}

