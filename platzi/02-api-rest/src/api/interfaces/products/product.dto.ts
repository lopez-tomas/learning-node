import { Product  } from "./product.model";

export type CreateProductDto = Omit<Product, 'id'>;
