import { useCart } from "@/context/Cart";
import { ProductProps } from "@/context/Product/interfaces";
import { formatCurrency } from "@/utils/formatCurrency";

import * as S from "./styles";

interface ProductsProps {
  product: ProductProps;
}

export function Products({ product }: ProductsProps) {
  const { addProductInCart, cart } = useCart();

  const productInCart = !!cart.find(
    (productInCart: ProductProps) => productInCart.id === product.id
  );

  return (
    <S.Wrapper>
      <S.Image src={product.image} alt={product.title} />

      <S.Title>{product.title}</S.Title>
      <S.Price>{formatCurrency(product.price)}</S.Price>

      <S.Button
        productInCart={productInCart}
        onClick={() => addProductInCart(product)}
      >
        <span>
          <img src="./cart.svg" alt="Adiciona o produto ao carrinho" />
          <p>{productInCart ? 1 : 0}</p>
        </span>

        {productInCart ? "ITEM ADICIONADO" : "ADICIONAR AO CARRINHO"}
      </S.Button>
    </S.Wrapper>
  );
}
