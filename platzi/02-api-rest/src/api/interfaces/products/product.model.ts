export interface Product {
  readonly id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  idCategory: string;
  isBlocked: boolean;
}
