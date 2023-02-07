import { useCart } from "@/context/Cart";
import Link from "next/link";

import * as S from "./styles";

export function Header() {
  const { cart } = useCart();

  return (
    <S.Wrapper>
      <S.Logo href="/">WeMovies</S.Logo>

      <S.Cart>
        <span>
          <S.MyCart>Meu Carrinho</S.MyCart>
          <S.CartItens> {cart.length} itens</S.CartItens>
        </span>

        <Link href="/cart">
          <img src="./bag.svg" alt="" />
        </Link>
      </S.Cart>
    </S.Wrapper>
  );
}
