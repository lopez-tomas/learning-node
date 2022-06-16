import { Product } from '../interfaces/products/product.model';
import { CreateProductDto, UpdateProductDto } from '../interfaces/products/product.dto';
import { sequelize } from '../libs/sequelize';

import { faker } from '@faker-js/faker';
import boom from '@hapi/boom';

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
    const response = await sequelize.models.Product.findAll();
    return response;
  }

  async getProduct(id: Product['id']) {
    const product = await sequelize.models.Product.findByPk(id);

    if (!product) {
      throw boom.notFound('product not found');
    }

    return product;
  }

  async update(id: Product['id'], changes: UpdateProductDto) {
    const product = await this.getProduct(id);
    const response = await product.update(changes);

    return response;
  }

  async delete(id: Product['id']) {
    const product = await this.getProduct(id);
    await product.destroy();

    return { id };
  }
}

export default ProductsService;
