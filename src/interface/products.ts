export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: number;
}

export interface ApiResponse {
  "en-US": Product[];
  "es-ES": Product[];
  "pt-BR": Product[];
}
