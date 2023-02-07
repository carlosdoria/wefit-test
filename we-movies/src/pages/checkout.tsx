import { PageWrapper } from "@/components/PageWrapper";
import { FeedbackPage } from "@/components/FeedbackPage";
import { PageHead } from "@/components/PageHead";

export default function CheckoutPage() {
  return (
    <>
      <PageHead
        title="WeMovies | Checkout"
        description="Página de pagamento realizado"
      />

      <PageWrapper>
        <FeedbackPage
          title="Compra realizada com sucesso!"
          imageUrl="./checkout.svg"
          alt=""
          url="/"
          imgPadding={true}
        />
      </PageWrapper>
    </>
  );
}
