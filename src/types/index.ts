export interface Plant {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}