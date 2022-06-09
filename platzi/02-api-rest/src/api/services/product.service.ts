import { Product } from '../interfaces/products/product.model';
import { faker } from '@faker-js/faker';
import { CreateProductDto, UpdateProductDto } from '../interfaces/products/product.dto';

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

  create(data: CreateProductDto) {
    const newProduct: Product = {
      id: faker.datatype.uuid(),
      ...data
    }

    this.products.push(newProduct);
    return newProduct;
  }

  get() {
    return this.products;
  }

  getProduct(id: Product['id']) {
    return this.products.find(product => product.id === id);
  }

  update(id: Product['id'], changes: UpdateProductDto) {
    const index = this.products.findIndex(product => product.id === id);

    if (index === -1) throw new Error('product not found');

    const prevData = this.products[index];
    this.products[index] = {...prevData, ...changes};

    return this.products[index];
  }

  delete(id: Product['id']) {
    const index = this.products.findIndex(product => product.id === id);

    if (index === -1) throw new Error('product not found');

    this.products.splice(index, 1);

    return { id };
  }
}

export default ProductsService;
