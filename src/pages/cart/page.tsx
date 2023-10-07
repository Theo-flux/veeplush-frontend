import { useEffect, useState } from "react";
import PageLayout from "../../layout/PageLayout";
import { Link } from "react-router-dom";
import { deleteCartedItem } from "../../services/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, TransparentBtn } from "../../components/buttons";
import { Container, Toast } from "../../components";
import { MdDelete } from "react-icons/md";
import { useCartStore } from "../../store/cart";
import { ClipLoader } from "react-spinners";
import { useCustomerStore } from "../../store/customer";
import { toCurrency } from "../../utils/toCurrency";

function Cart() {
  const queryClient = useQueryClient();
  const { cart } = useCartStore();
  const { customer } = useCustomerStore();
  const { mutate, isLoading } = useMutation(deleteCartedItem, {
    onError: (error: { detail: string }) => {
      Toast.error(error.detail);
    },

    onSuccess: (data) => {
      Toast.success(data);
      queryClient.invalidateQueries({ queryKey: ["customer_cart"] });
    },
  });

  const [total, setTotal] = useState(0);

  const handleDeleteItem = (arg: number) => {
    mutate(arg);
  };

  useEffect(() => {
    const totalPrice = Object.entries(cart).reduce(
      (agg, [, obj]) => (agg += obj["sub_total"]),
      0,
    );
    setTotal(totalPrice);
  }, [cart]);

  return (
    <PageLayout>
      <Container className="w-full h-screen">
        <div className="h-full">
          {cart.length === 0 ? (
            <div className="h-full w-full flex flex-col justify-center items-center">
              <h1 className="text-veeblack text-2xl font-bold">
                Cart is Empty:)
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
          ) : (
            <div className="pt-24 w-full h-[85%] overflow-scroll">
              <table className="w-full h-auto text-sm text-left text-gray-500 dark:text-gray-400 my-4 whitespace-nowrap">
                <thead className="w-full bg-white text-xs border-b border-grey text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0 z-30">
                  <tr className="w-full">
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Qty
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Subtotal
                    </th>
                  </tr>
                </thead>

                <tbody className="w-full">
                  {cart.map((item, index) => {
                    const {
                      product_id,
                      product_img,
                      sub_total,
                      length,
                      style,
                      qty,
                      name,
                      price,
                    } = item;

                    return (
                      <tr key={index} className="w-full">
                        <td className="px-6 py-4 flex justify-start items-start whitespace-wrap">
                          <figure className="w-[140px] h-[140px] shadow-md">
                            <img
                              className="w-full h-full object-cover"
                              src={product_img}
                              alt="carted-product"
                            />
                          </figure>

                          <div className="ml-3">
                            <p className="text-[15px] leading-[30px] tracking-[2px] w-[200px] text-ellipsis overflow-hidden">
                              {name}
                            </p>

                            <div className="mt-4">
                              <p className="text-sm leading-[24px] tracking-[1.6px] text-grey">
                                Length: {length} inches
                              </p>
                              <p className="text-sm leading-[24px] tracking-[1.6px] text-grey">
                                Style: {style}
                              </p>

                              <button
                                disabled={isLoading}
                                onClick={() => handleDeleteItem(product_id)}
                                className="mt-3 text-error opacity-50 flex justify-center items-center px-1 border border-error"
                              >
                                {isLoading ? (
                                  <ClipLoader size={10} color="#DC0000" />
                                ) : (
                                  <>
                                    <MdDelete className="" />{" "}
                                    <p className="text-sm">Remove</p>
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-3 align-top">
                          {toCurrency(price)}
                        </td>

                        <td className="px-6 py-3 align-top">{qty}</td>

                        <td className="px-6 py-3 align-top">
                          {toCurrency(sub_total)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>

                <tfoot className="bg-[#F9F9F9]">
                  <tr className="">
                    <td className="px-6 py-3"></td>
                    <td className="px-6 py-3"></td>
                    <td className="px-6 py-3 font-bold">Total</td>
                    <td className="px-6 py-3">{toCurrency(total)}</td>
                  </tr>
                </tfoot>
              </table>

              {cart.length !== 0 && (
                <div className="w-full flex flex-col items-end w-[90%] px-4 lg:px-0 max-w-full mx-auto">
                  <p className="font-light text-xs mb-4">
                    Tax included and shipping calculated at checkout
                  </p>
                  <Button text="Checkout" />
                </div>
              )}
            </div>
          )}
        </div>
      </Container>
    </PageLayout>
  );
}

export default Cart;
