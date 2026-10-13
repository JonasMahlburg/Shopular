import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../services/products';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-product-detail',
  styleUrl: './product-detail.scss',
  templateUrl: './product-detail.html',
})
export class ProductDetail {

  private route = inject(ActivatedRoute)
  productService = inject(Products)

  //defaults
  detail = {
        name: 'n/a',
        description: 'n/a',
        specs: 'n/a',
        stock: 0,
        price: 0,
  };

    ngOnInit() {
    let currentName = this.route.snapshot.paramMap.get('productName')
    if (currentName) {
       this.productService.setProductDetailByName(currentName)
    }
    this.detail = this.productService.productdetail
  }

  deleteDetail() {
    //will delete the product
    this.detail.name = ""
  }
}
