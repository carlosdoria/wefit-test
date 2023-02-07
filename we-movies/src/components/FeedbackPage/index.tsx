import { InternalLink } from "../InternalLink";

import * as S from "./styles";

interface FeedbackPageProps {
  title: string;
  imageUrl: string;
  url: string;
  alt: string;
  actionButtonText?: string;
  imgPadding?: boolean;
}

export function FeedbackPage({
  title,
  imageUrl,
  alt,
  url,
  actionButtonText,
  imgPadding = false,
}: FeedbackPageProps) {
  return (
    <S.Wrapper>
      <h2>{title}</h2>

      <S.Image imgPadding={imgPadding} src={imageUrl} alt={alt} />

      <InternalLink
        href={url}
        textLink={actionButtonText ? actionButtonText : "VOLTAR"}
      />
    </S.Wrapper>
  );
}
