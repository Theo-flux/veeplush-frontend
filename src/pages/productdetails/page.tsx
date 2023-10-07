import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Container, InputNumber, SelectInput, Toast } from "../../components";
import { Button, TransparentBtn } from "../../components/buttons";
import PageLayout from "../../layout/PageLayout";
import { productById } from "../../services/products";
import { addToCart } from "../../services/cart";
import { TOrderItem, TProducts } from "../../types/global";
import { BeatLoader } from "react-spinners";
import { addToCartValidation } from "../../helpers/validation";

function ProductDetails() {
  const queryClient = useQueryClient();
  const param = useParams();
  const [details, setDetails] = useState<Partial<TProducts>>();
  const [length, setLength] = useState<Array<number>>([]);
  const [style, setStyle] = useState<Array<string>>([]);
  const { data, isLoading } = useQuery(["product_detail"], () =>
    productById({ id: Number(param?.id) }),
  );
  const [product, setProduct] = useState<TOrderItem>({
    product_id: Number(param?.id),
    length: data ? length[0] : 0,
    style: "",
    qty: 0,
    sub_total: 0,
  });

  const { mutate } = useMutation(addToCart, {
    onError: () => {
      Toast.error("Login or create account to add items to cart.");
    },

    onSuccess: () => {
      Toast.success("added to cart!");
      queryClient.invalidateQueries({ queryKey: ["customer_cart"] });
    },
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    if (name === "qty") {
      setProduct((prevState) => ({
        ...prevState,
        [name]: Number(value),
        sub_total: Number(value) * (data?.price || 1),
      }));
    }

    if (name === "length") {
      setProduct((prevState) => ({
        ...prevState,
        [name]: Number(value),
      }));
    }

    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddToCart = () => {
    const error = addToCartValidation(product);

    if (Object.values(error).length !== 0) {
      Toast.error(Object.values(error)[0]);
    } else {
      mutate(product);
    }
  };

  useEffect(() => {
    setDetails(data);
    setLength(Object.values(data?.["length"] || {}));
    setStyle(Object.values(data?.["style"] || []));
  }, [data, isLoading]);

  return (
    <PageLayout>
      <div className="mt-28">
        {isLoading ? (
          <div className="py-16 flex flex-col justify-center items-center h-[500px]">
            <BeatLoader size={15} color="#F748EA" />
          </div>
        ) : details ? (
          <Container className="py-16">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <figure className="w-full md:w-[35%] h-[250px] md:h-[500px] drop-shadow">
                <img
                  className="w-full h-full object-cover"
                  src={details?.image}
                  alt="veeplush product"
                />
              </figure>

              <div className="w-full md:w-[55%]">
                <div className="w-full bg-white drop-shadow p-4">
                  <h1 className="text-xl tracking-[2.172px] md:text-2xl font-bold md:tracking-[4.172px]">
                    {details?.name}
                  </h1>

                  <p className="text-purple text-4xl font-bold mt-4">
                    ${details?.price}
                  </p>

                  <div className="w-full flex justify-start mt-4">
                    <div className="mr-4">
                      <SelectInput
                        id="length"
                        name="length"
                        label="Length"
                        placeholder="Choose a length"
                        options={length}
                        onChange={handleChange}
                      />
                    </div>

                    <SelectInput
                      id="style"
                      name="style"
                      label="Style"
                      placeholder="Choose a style"
                      options={style}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="w-[150px] mt-4">
                    <InputNumber
                      id="quantity"
                      name="qty"
                      label="Quantity"
                      placeholder={"quantity"}
                      min={1}
                      max={details?.stock_qty || 1}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mt-4">
                    <Button
                      text="Buy it now"
                      className="py-2 mr-2"
                      onClick={() => {}}
                    />
                    <TransparentBtn
                      text="Add to cart"
                      className="py-2 "
                      onClick={handleAddToCart}
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <p className="mb-4 font-light">{details.description}</p>

                  <p className="font-light">
                    The longer your hair the more bundles you'll need visit our
                    bundle deals page.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        ) : (
          <div className="py-24 flex flex-col justify-center items-center h-[600px]">
            <p className="text-sm mb-3">product doesn't exist</p>
            <Link to={{ pathname: "/" }}>
              <Button text="Go back home" />
            </Link>
          </div>
        )}
      </div>
    </PageLayout>
  );
}

export default ProductDetails;
