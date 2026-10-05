import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-product-detail',
  styleUrl: './product-detail.scss',
  templateUrl: './product-detail.html',
})
export class ProductDetail {
  //details for an example Product
  detail = {
    name: 'Gaming Maus',
    description:
      'Eine ergonomische Gaming-Maus mit hoher Präzision und einstellbarer DPI. Ideal für FPS- und MOBA-Spiele, bietet sie eine langlebige Bauweise und komfortable Seitentasten für schnelles Reagieren.',
    specs: 'dpi: 6400, cable length: 1.8m, color: Schwarz',
    stock: 120,
    price: 25.00,
  };

  deleteDetail() {
    //will delete the product
    this.detail.name = ""
  }
}
