import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cart";
import { useCustomerStore } from "../../store/customer";
import CheckoutInfo from "./CheckoutInfo";
import { Button, TransparentBtn } from "../../components/buttons";
import { toCurrency } from "../../utils/toCurrency";
import PageLayout from "../../layout/PageLayout";
import { Container } from "../../components";

function Checkout() {
  const [shipping] = useState<number>(25.0);
  const { cart, total } = useCartStore();
  const { customer } = useCustomerStore();

  return (
    <PageLayout>
      {cart.length !== 0 ? (
        <div className="py-32 lg:h-screen w-[95%] max-w-7xl mx-auto">
          <div className="h-full flex flex-col lg:flex-row justify-start items-start">
            <div className="w-full h-full lg:w-[60%] px-4 sm:p-0">
              <p className="font-semibold text-2xl border-b border-grey">
                Checkout
              </p>

              <div className="w-full my-4">
                <CheckoutInfo />
              </div>
            </div>
            <div className="h-full w-full lg:border-l lg:border-grey w-full lg:w-[40%]">
              <div className="bg-offgrey h-[390px] w-full p-4 overflow-x-scroll">
                {cart.map((item, idx) => {
                  const {
                    sub_total,
                    length,
                    style,
                    name,
                    price,
                    product_img,
                    qty,
                  } = item;
                  return (
                    <div
                      key={idx}
                      className="w-full last:mb-0 mb-4 flex justify-between items-start"
                    >
                      <figure className="w-full h-[130px] flex justify-start items-start">
                        <img
                          className="w-[130px] h-full object-cover shadow bg-white"
                          src={product_img}
                          alt="veeplush product"
                        />
                        <div className="w-[100px] h-full ml-3">
                          <p className="w-full h-[20px] text-ellipsis overflow-hidden font-light">
                            {name}
                          </p>
                          <div className="mt-1">
                            <p className="text-grey">{toCurrency(price)}</p>
                            <p className="text-grey">Qty: {qty}</p>
                            <p className="text-grey">Style: {style}</p>
                            <p className="text-grey">length: {length}</p>
                          </div>
                        </div>
                      </figure>

                      <p className="font-light">{toCurrency(sub_total)}</p>
                    </div>
                  );
                })}
              </div>

              <div className="w-full my-4 px-4 flex justify-between items-center">
                <p>Subtotal:</p>
                <p className="font-bold">{toCurrency(total)}</p>
              </div>

              <div className="w-full mb-4 px-4 flex justify-between items-center">
                <p>Shipping:</p>
                <p className="font-bold">{toCurrency(shipping)}</p>
              </div>

              <div className="bg-veeblack w-full p-4 text-white flex justify-between items-center">
                <p>TOTAL:</p>
                <p className="font-bold text-xl">
                  {toCurrency(total + shipping)}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Container className="h-screen flex flex-col justify-center items-center">
          <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="text-veeblack text-2xl font-bold">
              Nothing to checkout:)
            </h1>
            <div className="w-full text-center">
              <p className="mt-4 text-gray">
                {Object.values(customer).length !== 0
                  ? "Fill up your cart by adding items now."
                  : `Login or create an account to start adding items to your cart.`}
              </p>
              <div className="mt-4">
                {Object.values(customer).length !== 0 ? (
                  <Link to={{ pathname: "/hairs" }}>
                    <Button text="Shop now" />
                  </Link>
                ) : (
                  <>
                    <Link to={{ pathname: "/login" }}>
                      <TransparentBtn className="mr-2" text="Login" />
                    </Link>

                    <Link to={{ pathname: "/register" }}>
                      <Button text="Sign up" />
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </Container>
      )}
    </PageLayout>
  );
}

export default Checkout;
