import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Product} from '../app.model';

@Component({
  selector: 'app-product',
  template: `
  <app-product-image [product]="product"></app-product-image>
  <div class="content">
    <div class="header">{{ product.name }}</div>
    <div class="meta">
      <div class="product-sku">SKU #{{ product.sku }}</div>
    </div>
    <div class="description">
      <app-product-department [product]="product"></app-product-department>
    </div>
  </div>
  <app-price-display [price]="product.price"></app-price-display>
  `
})
export class ProductComponent implements OnInit {
  @HostBinding('class') classes = 'item';

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
