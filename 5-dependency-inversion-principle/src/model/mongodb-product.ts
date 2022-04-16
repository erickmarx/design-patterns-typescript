import { IDBProduct } from "./my-sql-product.interface";

export class MongoDBProduct implements IDBProduct {
  getProductById(productId: number): string {
    return `MondoDB: Exibindo os dados do produto ${productId}`;
  }
}
