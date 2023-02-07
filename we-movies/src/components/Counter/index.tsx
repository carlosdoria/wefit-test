import * as S from "./styles";

interface CounterProps {
  productId: number;
}

export function Counter({ productId }: CounterProps) {
  return (
    <S.Wrapper>
      <img src="removeIcon.svg" alt="" />
      <input type="text" value={1} />
      <img src="./addIcon.svg" alt="" />
    </S.Wrapper>
  );
}
