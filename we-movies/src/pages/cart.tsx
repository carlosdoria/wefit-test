import { PageWrapper } from "@/components/PageWrapper";
import { FeedbackPage } from "@/components/FeedbackPage";
import { Cart } from "@/components/Cart";
import { useCart } from "@/context/Cart";
import { PageHead } from "@/components/PageHead";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <>
      <PageHead
        title="WeMovies | Carrinho"
        description="Carrinho de produtos"
      />

      <PageWrapper>
        {cart.length > 0 ? (
          <Cart />
        ) : (
          <FeedbackPage
            title="Parece que não há nada por aqui :("
            imageUrl="./emptyCart.svg"
            alt=""
            url="/"
          />
        )}
      </PageWrapper>
    </>
  );
}
