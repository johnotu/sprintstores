interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: string;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: Rating;
}

export type Category = string;

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}
