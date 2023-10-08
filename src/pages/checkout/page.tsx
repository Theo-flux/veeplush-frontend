import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCustomerStore } from "../../store/customer";
import { useCartStore } from "../../store/cart";
import { toCurrency } from "../../utils/toCurrency";

function Checkout() {
  const navigate = useNavigate();
  const [shipping] = useState<number>(25.0);
  const { customer } = useCustomerStore();
  const { cart, total } = useCartStore();

  useEffect(() => {
    if (Object.values(customer).length === 0) {
      navigate("/");
    }
  }, []);

  return (
    <div className="py-8 lg:h-screen w-[90%] max-w-7xl mx-auto">
      <div className="h-full flex flex-col lg:flex-row justify-start items-start">
        <div className="w-full h-full lg:w-[60%] px-4 sm:p-0">
          <p className="font-semibold text-2xl border-b border-grey">
            Checkout
          </p>
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
            <p className="font-bold text-xl">{toCurrency(total + shipping)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
