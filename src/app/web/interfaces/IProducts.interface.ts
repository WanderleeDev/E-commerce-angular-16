export interface IProducts {
  id:                 number;
  title:              string;
  description:        string;
  price:              number;
  discountPercentage: number;
  rating:             number;
  stock:              number;
  brand:              string;
  category:           ProductCategory
  thumbnail:          string;
  images:             string[];
}

export interface IRequestProducts {
  limit:              number;
  products:           IProducts[];
  skip:               number;
  total:              number;
}

export type ProductCategory =
  | "smartphones"
  | "laptops"
  | "fragrances"
  | "skincare"
  | "groceries"
  | "home-decoration"
  | "furniture"
  | "tops"
  | "womens-dresses"
  | "womens-shoes"
  | "mens-shirts"
  | "mens-shoes"
  | "mens-watches"
  | "womens-watches"
  | "womens-bags"
  | "womens-jewellery"
  | "sunglasses"
  | "automotive"
  | "motorcycle"
  | "lighting";


  //  for shoppingCar
  export interface IMyProductsCar extends Omit<IProducts, 'images'| 'stock'>  {
    quantity: number;
  }
