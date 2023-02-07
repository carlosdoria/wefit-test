import { useCart } from "@/context/Cart";
import { ProductProps } from "@/context/Product/interfaces";
import { formatCurrency } from "@/utils/formatCurrency";
import { Counter } from "../Counter";
import * as S from "./styles";

interface CartItemDesktopProps {
  product: ProductProps;
}

export function CartItemDesktop({ product }: CartItemDesktopProps) {
  const { id, title, price, image } = product;

  const { deleteProductInCart } = useCart();

  return (
    <S.Wrapper>
      <td>
        <S.Image src={image} alt={title} />

        <S.TitleAndPriceWrapper>
          <S.Title>{title}</S.Title>
          <S.Price>{formatCurrency(price)}</S.Price>
        </S.TitleAndPriceWrapper>
      </td>

      <td>
        <Counter productId={id} />
      </td>

      <td>
        <S.Price>{formatCurrency(price)}</S.Price>
      </td>

      <td>
        <img
          src="./deleteIcon.svg"
          alt=""
          onClick={() => deleteProductInCart(id)}
        />
      </td>
    </S.Wrapper>
  );
}
