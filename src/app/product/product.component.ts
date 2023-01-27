import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
name="Laptop Product"
title="Product List"
products:any[]=[
  {id:1,name:"Asus Laptop",price:2500,categoryId:1,Description:"This Laptop is Perfect !"},
  {id:2,name:"Toshiba Laptop",price:1500,categoryId:1,Description:"This Laptop is Not Bad !"},
  {id:3,name:"Logitech Mouse",price:1500,categoryId:2,Description:"This Mouse is So Beautifully !"},
]
}
