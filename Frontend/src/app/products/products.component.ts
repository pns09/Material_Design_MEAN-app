import { ProdService } from './prod.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];
  // dataSource = this.products;

  constructor(private _prodservice: ProdService) { }

  ngOnInit() {
    this.products = this._prodservice.getproducts();

  }
}
