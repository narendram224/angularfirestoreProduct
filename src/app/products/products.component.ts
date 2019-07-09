import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products =[];
  constructor(private productser:ProductsService) { }

  ngOnInit() {
    this.productser.getProducts().subscribe(serverData=>{
      console.log(serverData);
      this.products = serverData;
    })
  }

}
