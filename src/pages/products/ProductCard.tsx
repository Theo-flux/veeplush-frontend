import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { addToCart, deleteCartedItem } from "../../services/cart";
import { TOrderItem } from "../../types/global";
import { Toast } from "../../components";
import { useQueryClient } from "@tanstack/react-query";
import { BsCartXFill } from "react-icons/bs";
import { toCurrency } from "../../utils/toCurrency";

interface IProductCard {
  image: string;
  name: string;
  id: number;
  price: number;
  length: Record<string, number>;
  style: Record<string, string>;
  isCarted: boolean;
}

const ProductCard = ({
  image,
  name,
  id,
  price,
  length,
  style,
  isCarted,
}: IProductCard) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(addToCart, {
    onError: () => {
      Toast.error("Login or create account to add items to cart.");
    },

    onSuccess: () => {
      Toast.success("added to cart!");
      queryClient.invalidateQueries({ queryKey: ["customer_cart"] });
    },
  });
  const { mutate: deleteMutate, isLoading: onDeleteLoading } = useMutation(
    deleteCartedItem,
    {
      onError: () => {
        Toast.error("Error removing from cart. Try again later");
      },

      onSuccess: () => {
        Toast.success("removed from cart!");
        queryClient.invalidateQueries({ queryKey: ["customer_cart"] });
      },
    },
  );

  const handleAddTocart = () => {
    const payload: TOrderItem = {
      product_id: id,
      sub_total: price,
      length: Object.values(length)[0],
      style: Object.values(style)[0],
      qty: 1,
    };

    mutate(payload);
  };

  const handleDeleteFromcart = (arg: number) => {
    deleteMutate(arg);
    console.log(arg);
  };

  return (
    <div className="w-[270px] h-auto place-self-center">
      <figure className="relative top-0 left-0 w-full h-[200px] w-full">
        <img
          src={image}
          alt="veeplush product"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000050] flex justify-center items-center group hover:bg-[#00000090] transition-all">
          <Link to={{ pathname: `/hair/details/${id}` }}>
            <p className="hidden group-hover:block group-hover:text-white group-hover:underline font-bold cursor-pointer">
              view details
            </p>
          </Link>
        </div>
      </figure>

      <div className="h-[120px] w-full bg-black p-2">
        <div className="flex justify-between items-start w-full">
          <p className="text-offwhite text-xs font-semibold w-[75%]">{name}</p>

          {isCarted ? (
            <button
              disabled={onDeleteLoading}
              className="bg-error p-1 rounded cursor-pointer"
              onClick={() => {
                handleDeleteFromcart(id);
              }}
            >
              <BsCartXFill className="text-white" />
            </button>
          ) : (
            <button
              disabled={isLoading}
              className="bg-purple p-1 rounded cursor-pointer"
              onClick={handleAddTocart}
            >
              <FaCartPlus className="text-white" />
            </button>
          )}
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-purple text-2xl font-bold">{toCurrency(price)}</p>
          <p className="text-grey text-xs mt-2">Orders | Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
