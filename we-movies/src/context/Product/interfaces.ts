import { ReactNode } from "react";

export interface ProductsContext {
  products: any[];
  fetchProducts: () => void;
}

export interface ProductsProviderProps {
  children: ReactNode;
}

export interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
}
