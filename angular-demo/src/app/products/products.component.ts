import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../app.model';

@Component({
  selector: 'app-products',
  template: `
  <div class="ui items">
    <app-product
      *ngFor="let myProduct of productList"
      [product]="myProduct"
      (click)='clicked(myProduct)'
      [class.selected]="isSelected(myProduct)">
    </app-product>
  </div>
  `
})
export class ProductsComponent implements OnInit {
  /**
   * @input productList - the Product[] passed to us
   */
  @Input() productList: Product[];

  /**
   * @output onProductSelected - outputs the current
   *          Product whenever a new Product is selected
   */
  @Output() onProductSelected: EventEmitter<Product>;

  /**
   * @property currentProduct - local state containing
   *             the currently selected `Product`
   */
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

  ngOnInit() {
  }

}
