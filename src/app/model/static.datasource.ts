import { Injectable } from '@angular/core';
import { Product} from './product.model';
import { Observable} from 'rxjs/Observable';
import "rxjs/add/observable/from";

@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(1, 'Product 1', "Category 1", "Product 1 (Category 1)", 200),
    new Product(2, 'Product 2', "Category 2", "Product 2 (Category 2)", 300),
    new Product(3, 'Product 3', "Category 3", "Product 3 (Category 3)", 400),
    new Product(4, 'Product 4', "Category 4", "Product 4 (Category 4)", 500),
    new Product(5, 'Product 5', "Category 5", "Product 5 (Category 5)", 600),
  ];

  getProducts(): Observable<Product[]> {
    return Observable.from([this.products]);
  }
}
