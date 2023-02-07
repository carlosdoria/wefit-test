import { useCart } from "@/context/Cart";
import { ProductProps } from "@/context/Product/interfaces";
import { formatCurrency } from "@/utils/formatCurrency";
import { Counter } from "../Counter";

import * as S from "./styles";

interface CartItemMobileProps {
  product: ProductProps;
}

export function CartItemMobile({ product }: CartItemMobileProps) {
  const { id, title, price, image } = product;

  const { deleteProductInCart } = useCart();

  return (
    <S.Wrapper>
      <S.Image src={image} alt={title} />

      <S.InfosWrapper>
        <S.InfosHeader>
          <S.Title>{title}</S.Title>

          <S.PriceAndDeleteWrapper>
            <S.Price>{formatCurrency(price)}</S.Price>
            <img
              src="./deleteIcon.svg"
              alt=""
              onClick={() => deleteProductInCart(id)}
            />
          </S.PriceAndDeleteWrapper>
        </S.InfosHeader>

        <S.InfosFooter>
          <Counter productId={id} />

          <div>
            <S.Subtotal>SUBTOTAL</S.Subtotal>
            <S.Price>{formatCurrency(price)}</S.Price>
          </div>
        </S.InfosFooter>
      </S.InfosWrapper>
    </S.Wrapper>
  );
}
