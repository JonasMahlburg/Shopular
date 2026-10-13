import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Products } from '../../services/products';

@Component({
  imports: [RouterLink],
  selector: 'app-product-list',
  styleUrl: './product-list.scss',
  templateUrl: './product-list.html',
})
export class ProductList {
productService = inject(Products)

  list = this.productService.productlist
}
