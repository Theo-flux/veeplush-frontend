import { FaCartPlus } from "react-icons/fa6";
// import { BsCartXFill } from "react-icons/bs";

const ProductCard = () => {
  return (
    <div className="w-[270px] h-auto place-self-center">
      <figure className="relative top-0 left-0 w-full h-[200px] w-full">
        <img
          src="https://res.cloudinary.com/daclozrmx/image/upload/v1695636146/veeplush/qdfnw0xvxqyyczhcotqq.png"
          alt="veeplush product"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000050] flex justify-center items-center group hover:bg-[#00000090] transition-all">
          <p className="hidden group-hover:block group-hover:text-white group-hover:underline font-bold cursor-pointer">view details</p>
        </div>
      </figure>

      <div className="h-[120px] w-full bg-black p-2">
        <div className="flex justify-between items-start w-full">
          <p className="text-offwhite text-xs font-semibold w-[75%]">
            Raw virgin hair bundle deep wave
          </p>

          <div className="bg-white p-1 rounded cursor-pointer">
            <FaCartPlus className="text-black" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-purple text-2xl font-bold">$174.99</p>
          <p className="text-grey text-xs mt-2">Orders | Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
