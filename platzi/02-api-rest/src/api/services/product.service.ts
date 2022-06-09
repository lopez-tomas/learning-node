import { Product } from '../interfaces/products/product.model';
import { faker } from '@faker-js/faker';
// import { CreateProductDto } from '../interfaces/products/product.dto';

class ProductsService {
  products: Product[];

  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;

    for(let i=0; i < limit; i++) {
      let product: Product = {
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price()),
        description: faker.commerce.productDescription(),
        image: faker.image.imageUrl(),
        idCategory: faker.datatype.uuid()
      }

      this.products.push(product);
    }
  }

  create() {
    // code...
  }

  get() {
    return this.products;
  }

  getProduct(id: Product['id']) {
    return this.products.find(product => product.id === id);
  }

  update() {
    // code...
  }

  delete() {
    // code...
  }
}

export default ProductsService;
