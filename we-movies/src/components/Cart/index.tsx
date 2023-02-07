import { useCart } from "@/context/Cart";
import { formatCurrency } from "@/utils/formatCurrency";
import { CartContent } from "../CartContent";
import { InternalLink } from "../InternalLink";

import * as S from "./styles";

interface CartProps {}

export function Cart({}: CartProps) {
  const { cleanCart, totalCartValue } = useCart();

  return (
    <S.Wrapper>
      <CartContent />

      <S.TotalWrapper>
        <S.Total>
          <p>Total</p>
          <strong>{formatCurrency(totalCartValue)}</strong>
        </S.Total>

        <InternalLink
          onClick={cleanCart}
          href="/checkout"
          textLink="Finalizar pedido"
        />
      </S.TotalWrapper>
    </S.Wrapper>
  );
}
