import { useCart } from "@/context/Cart";
import { CartItemDesktop } from "../CartItemDesktop";
import { CartItemMobile } from "../CartItemMobile";

import * as S from "./styles";

interface CartContentProps {}

export function CartContent({}: CartContentProps) {
  const { cart } = useCart();

  return (
    <S.Wrapper>
      <S.CartMobile>
        {cart.map((product) => (
          <CartItemMobile key={product.id} product={product} />
        ))}
      </S.CartMobile>

      <S.Table>
        <thead>
          <tr>
            <S.Th>Produto</S.Th>
            <S.Th>QTD</S.Th>
            <S.Th>SUBTOTAL</S.Th>
            <S.Th></S.Th>
          </tr>
        </thead>

        <tbody>
          {cart.map((product) => (
            <CartItemDesktop key={product.id} product={product} />
          ))}
        </tbody>
      </S.Table>
    </S.Wrapper>
  );
}
