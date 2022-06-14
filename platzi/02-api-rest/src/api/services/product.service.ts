import { Product } from '../interfaces/products/product.model';
import { CreateProductDto, UpdateProductDto } from '../interfaces/products/product.dto';
import { pool } from '../libs/postgres.pool';

import { faker } from '@faker-js/faker';
import boom from '@hapi/boom';

class ProductsService {
  products: Product[];
  pool;

  constructor() {
    this.products = [];
    this.generate();
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
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
        idCategory: faker.datatype.uuid(),
        isBlocked: faker.datatype.boolean(),
      }

      this.products.push(product);
    }
  }

  async create(data: CreateProductDto) {
    const newProduct: Product = {
      id: faker.datatype.uuid(),
      ...data
    }

    this.products.push(newProduct);
    return newProduct;
  }

  async get() {
    const query = 'SELECT * FROM tasks';
    const response = await this.pool.query(query);
    return response.rows;
  }

  async getProduct(id: Product['id']) {
    const product = this.products.find(product => product.id === id);

    if (!product) throw boom.notFound('product not found');

    if(product.isBlocked) throw boom.conflict('product is blocked');

    return product;
  }

  async update(id: Product['id'], changes: UpdateProductDto) {
    const index = this.products.findIndex(product => product.id === id);

    if (index === -1) throw boom.notFound('product not found');

    const prevData = this.products[index];
    this.products[index] = {...prevData, ...changes};

    return this.products[index];
  }

  async delete(id: Product['id']) {
    const index = this.products.findIndex(product => product.id === id);

    if (index === -1) throw boom.notFound('product not found');

    this.products.splice(index, 1);

    return { id };
  }
}

export default ProductsService;
