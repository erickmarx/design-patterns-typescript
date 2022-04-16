import { DBType } from "../model/db";
import { IDBProduct } from "../model/my-sql-product.interface";
import { MySQLProduct } from "../model/my-sql-product";
import { MongoDBProduct } from "../model/mongodb-product";

export class DbProductFactory {
  private static type: DBType = DBType.MONGODB;
  public static create(): IDBProduct {
    switch (DbProductFactory.type) {
      case DBType.MYSQL:
        return new MySQLProduct();
      case DBType.MONGODB:
        return new MongoDBProduct();
    }
  }
}
