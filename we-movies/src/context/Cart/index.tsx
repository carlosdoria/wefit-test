import { createContext, useContext, useMemo, useState } from "react";
import { ProductProps } from "../Product/interfaces";
import { CartContext, CartProviderProps } from "./interfaces";

const CartContext = createContext({} as CartContext);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Array<ProductProps>>([]);

  const totalCartValue = useMemo(() => {
    const total = cart.reduce((acc, value) => acc + value.price, 0);

    return total;
  }, [cart]);

  const addProductInCart = async (product: ProductProps) => {
    try {
      const productInCart = !!cart.find(
        (productInCart: ProductProps) => productInCart.id === product.id
      );

      if (productInCart) return;

      setCart((oldState) => [...oldState, product]);
    } catch (err) {
      console.error("FetchProducts error:", err);
    }
  };

  const deleteProductInCart = async (productId: number) => {
    try {
      const newProductsInCart = cart.filter(
        (productInCart: ProductProps) => productInCart.id !== productId
      );

      setCart(newProductsInCart);
    } catch (err) {
      console.error("FetchProducts error:", err);
    }
  };

  const cleanCart = () => {
    try {
      setCart([]);
    } catch (err) {
      console.error("Clean the cart error:", err);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalCartValue,
        addProductInCart,
        deleteProductInCart,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
