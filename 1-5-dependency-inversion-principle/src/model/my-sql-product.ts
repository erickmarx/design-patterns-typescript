import { IDBProduct } from "./my-sql-product.interface";

export class MySQLProduct implements IDBProduct {
  getProductById(productId: number): string {
    return `MySQL: Exibindo dados do produto ${productId}`;
  }
}
