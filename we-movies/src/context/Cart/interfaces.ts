import { ReactNode } from "react";
import { ProductProps } from "../Product/interfaces";

export interface CartContext {
  cart: ProductProps[];
  totalCartValue: number;
  addProductInCart: (product: ProductProps) => void;
  deleteProductInCart: (productId: number) => void;
  cleanCart: () => void;
}

export interface CartProviderProps {
  children: ReactNode;
}
