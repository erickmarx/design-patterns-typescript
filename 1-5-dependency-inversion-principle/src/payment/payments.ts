import { DbProductFactory } from "../factory/db-product-factory";
import { MySQLProduct } from "../model/my-sql-product";

export class Payment {
  pay(productId: number): void {
    const dbProduct = DbProductFactory.create();
    const product = dbProduct.getProductById(productId);

    console.log(product);
  }
}
