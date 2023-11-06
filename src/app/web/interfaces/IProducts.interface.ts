export interface IProducts {
  id:                 number;
  title:              string;
  description:        string;
  price:              number;
  discountPercentage: number;
  rating:             number;
  stock:              number;
  brand:              string;
  category:           string;
  thumbnail:          string;
  images:             string[];
}

export interface IRequestProducts {
  limit:              number;
  products:           IProducts[];
  skip:               number;
  total:              number;
}
