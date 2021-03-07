import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import {ProductService} from '../service/product.service';
import{OurChocolates}from "./sample.chocolate";



@Component({
  selector: 'app-chocolates',
  templateUrl: './chocolates.component.html',
  styleUrls: ['./chocolates.component.css']
})
export class ChocolatesComponent implements OnInit {




  products:OurChocolates[] =[];

  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    this.getOurproduct();
  }

  getOurproduct(){
    this.products=this.productservice.OurProduct();
  }

}
