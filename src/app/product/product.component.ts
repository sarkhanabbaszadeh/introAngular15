import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
name="Laptop Product"
title="Product List"
filterText=""
//products="" // Don't have product this category
products:Product[]=[
  {id:1,name:"Asus Laptop",price:2500,categoryId:1,description:"This Laptop is Perfect !",imageUrl:"https://images.unsplash.com/photo-1630794180018-433d915c34ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"},
  {id:2,name:"Toshiba Laptop",price:1500,categoryId:1,description:"This Laptop is Not Bad !",imageUrl:"https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},
  {id:3,name:"Logitech Mouse",price:1500,categoryId:2,description:"This Mouse is So Beautifully !",imageUrl:"https://images.unsplash.com/photo-1672636836550-01093fe3d208?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"},
]
}
