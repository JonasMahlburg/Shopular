import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [UpperCasePipe],
  selector: 'app-error-page',
  styleUrl: './error-page.scss',
  templateUrl: './error-page.html',
})
export class ErrorPage {
  message = {
    noProduct: "Not Product Found"
  }
}
