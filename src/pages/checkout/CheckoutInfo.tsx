import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { InputText } from "../../components";
import { Button, LoadingButton } from "../../components/buttons";
import { useCustomerStore } from "../../store/customer";
import { TCustomerInfo } from "../../types/global";
import { Link } from "react-router-dom";
import { checkoutInfoValidation } from "../../helpers/validation";
import { updateCustomerInfo } from "../../services/auth";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

interface ICheckoutInfoProps {
  shipping: number;
  total: number;
}

const CheckoutInfo = ({ shipping, total }: ICheckoutInfoProps) => {
  const queryClient = useQueryClient();
  const [active, setActive] = useState<
    "cart" | "information" | "shipping" | "payment"
  >("cart");
  const { customer } = useCustomerStore();
  const [info, setInfo] = useState<TCustomerInfo>({
    first_name: "",
    last_name: "",
    phone_number: "",
    shipping_address: "",
    country: "",
    city: "",
    state: "",
    postal_code: "",
  });
  const [infoError, setInfoError] = useState<Partial<TCustomerInfo>>({});

  const { mutate, isLoading } = useMutation(updateCustomerInfo, {
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["current_customer"] });
      console.log(data);
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    setInfoError((prevInfoError) => ({ ...prevInfoError, [name]: "" }));
  };

  const handleInfoSubmit = () => {
    const error = checkoutInfoValidation(info);

    if (Object.values(error).length !== 0) {
      setInfoError(error);
    } else {
      mutate(info);
    }
  };

  const config = {
    public_key: import.meta.env.VITE_REACT_APP_FLUTTERWAVE_PUBLICK_KEY,
    tx_ref: nanoid(),
    amount: shipping + total,
    currency: "USD",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: customer.email || "",
      phone_number: customer.phone_number || "",
      name: customer.first_name || "",
    },
    customizations: {
      title: `${customer.username} shopping items`,
      description: "Payment for items in cart",
      logo: "https://res.cloudinary.com/daclozrmx/image/upload/v1696794401/veeplush/veeplush_logo_ewtqz2.svg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  useEffect(() => {
    if (customer.phone_number && customer.shipping_address) {
      setActive("payment");
    }
  }, [customer]);

  return (
    <div className="w-full">
      <div className="flex justify-start items-center font-light text-grey">
        <span className="flex justify-start items-center">
          <p
            className={`mr-1 ${
              ["cart", "information", "shipping", "payment"].includes(active) &&
              "text-purple"
            }`}
          >
            cart
          </p>
          <MdKeyboardArrowRight />
        </span>
        <span className="flex justify-start items-center">
          <p
            className={`mx-1 ${
              ["information", "shipping", "payment"].includes(active) &&
              "text-purple"
            }`}
          >
            information
          </p>
          <MdKeyboardArrowRight />
        </span>
        <span className="flex justify-start items-center">
          <p
            className={`mx-1 ${
              ["shipping", "payment"].includes(active) && "text-purple"
            }`}
          >
            shipping
          </p>
          <MdKeyboardArrowRight />
        </span>
        <span>
          <p
            className={`ml-1 ${["payment"].includes(active) && "text-purple"}`}
          >
            payment
          </p>
        </span>
      </div>

      {customer.phone_number && (
        <div className="bg-white shadow w-full lg:w-[95%] p-3 my-4">
          <div className="flex justify-between items-center border-b border-[#C4C4C450] py-2">
            <div className="flex justify-start items-center">
              <p className="text-grey mr-2 text-md">Contact:</p>
              <p className="font-light">{customer.phone_number}</p>
            </div>
            <p className="text-purple underline cursor-pointer">Edit</p>
          </div>

          <div className="flex justify-between items-center border-b border-[#C4C4C450] py-2">
            <div className="flex justify-start items-center">
              <p className="text-grey mr-2 text-md">Ship to:</p>
              <p className="font-light">
                {customer.state}, {customer.country}
              </p>
            </div>
            <p className="text-purple underline cursor-pointer">Edit</p>
          </div>

          <div className="flex justify-between items-center border-b border-[#C4C4C450] py-2">
            <div className="flex justify-start items-center">
              <p className="text-grey mr-2 text-md">Method:</p>
              <p className="font-light">Inter... Shipping: $25.00</p>
            </div>
            <p className="text-purple underline cursor-pointer">Edit</p>
          </div>
        </div>
      )}

      {active === "cart" && (
        <div className="w-full lg:w-[95%] my-4">
          <p className="mb-3 font-light">Contact Information</p>
          <InputText
            id={"phone_number"}
            name="phone_number"
            placeholder="08123456789"
            error={infoError.phone_number}
            onChange={handleChange}
          />

          <div className="mt-8">
            <p className="mb-3 font-light">Shipping Information</p>
            <div className="flex justify-between items-center">
              <div className="w-[48%]">
                <InputText
                  id={"first_name"}
                  name="first_name"
                  placeholder="John"
                  error={infoError.first_name}
                  onChange={handleChange}
                />
              </div>

              <div className="w-[48%]">
                <InputText
                  id={"last_name"}
                  name="last_name"
                  placeholder="Doe"
                  error={infoError.last_name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="w-full">
              <InputText
                id={"address"}
                name="shipping_address"
                placeholder="Address"
                error={infoError.shipping_address}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="w-[48%]">
                <InputText
                  id={"city"}
                  name="city"
                  placeholder="City"
                  error={infoError.city}
                  onChange={handleChange}
                />
              </div>

              <div className="w-[48%]">
                <InputText
                  id={"state"}
                  name="state"
                  placeholder="State"
                  error={infoError.state}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="w-[48%]">
                <InputText
                  id={"country"}
                  name="country"
                  placeholder="Country"
                  error={infoError.country}
                  onChange={handleChange}
                />
              </div>

              <div className="w-[48%]">
                <InputText
                  id={"zip"}
                  name="postal_code"
                  placeholder="Zip/Postal code"
                  error={infoError.postal_code}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div>
            <LoadingButton
              isLoading={isLoading}
              className="mr-2"
              text="Continue to shipping"
              onClick={handleInfoSubmit}
            />
            <Link to={{ pathname: "/cart" }}>
              <Button text="Return to cart" />
            </Link>
          </div>
        </div>
      )}

      {active === "payment" && (
        <div className="my-4">
          <Button
            text="Procced to payment"
            onClick={() =>
              handleFlutterPayment({
                callback: (response) => {
                  console.log(response);
                  closePaymentModal();
                },
                onClose: () => {},
              })
            }
          />
        </div>
      )}
    </div>
  );
};

export default CheckoutInfo;
