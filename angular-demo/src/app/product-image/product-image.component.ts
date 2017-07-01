import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Product} from '../app.model';

@Component({
  selector: 'app-product-image',
  template: `
  <img class="product-image" [src]="product.imageUrl">
  `
})
export class ProductImageComponent implements OnInit {
  @HostBinding('class') classes = 'ui small image';

  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
