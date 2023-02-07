import { MoviesApi } from "@/services/moviesApi";
import { formatCurrency } from "@/utils/formatCurrency";
import { createContext, useCallback, useContext, useState } from "react";
import {
  ProductProps,
  ProductsContext,
  ProductsProviderProps,
} from "./interfaces";

const ProductsContext = createContext({} as ProductsContext);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await MoviesApi.get("/products");

      setProducts(response.data);
    } catch (err) {
      console.error("FetchProducts error:", err);
    }
  }, [products]);

  return (
    <ProductsContext.Provider value={{ products, fetchProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  return context;
}
