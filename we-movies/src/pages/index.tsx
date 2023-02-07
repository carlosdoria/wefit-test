import { useEffect } from "react";

import { ProductProps } from "@/context/Product/interfaces";
import { useProducts } from "@/context/Product";

import { PageWrapper } from "@/components/PageWrapper";
import { Products } from "@/components/Products";
import { Loading } from "@/components/Loading";
import { PageHead } from "@/components/PageHead";
import { ProductList } from "@/components/ProductList";

export default function HomePage() {
  const { fetchProducts, products } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <PageHead title="WeMovies | Home" description="Página inicial" />

      <PageWrapper>
        {products.length > 0 ? (
          <ProductList>
            {products.map((product: ProductProps) => (
              <Products key={product.id} product={product} />
            ))}
          </ProductList>
        ) : (
          <Loading />
        )}
      </PageWrapper>
    </>
  );
}
