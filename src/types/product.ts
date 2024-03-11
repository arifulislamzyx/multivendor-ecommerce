export interface Product {
    _id: string;
  name: string;
  category: string;
  img: string;
  seller: string;
  price: number;
  stock: number;
  rating: number;
  ratingsCount:number;
  shipping: number;
  quantity: number;
}

export interface ApiResponse {
  category: ApiResponse;
  data(data: any): unknown;
  products: Product[]
}