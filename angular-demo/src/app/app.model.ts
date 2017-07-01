/**
 * @author XiongNeng
 * @version 1.0
 * @since 2017/7/1
 */
export class Product {
  constructor(public sku: string,
              public name: string,
              public imageUrl: string,
              public department: string[],
              public price: number) {
  }
}
