import { ReactNode } from "react";
import * as S from "./styles";

interface ProductListProps {
  children: ReactNode;
}

export function ProductList({ children }: ProductListProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
