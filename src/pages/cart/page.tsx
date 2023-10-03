import { Container } from "../../components";
import PageLayout from "../../layout/PageLayout";
import { MdDelete } from "react-icons/md";

function Cart() {
  return (
    <PageLayout>
      <Container className="w-full h-screen">
        <div className="py-24 w-full h-full overflow-scroll">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 my-4 whitespace-nowrap">
            <thead className="w-full text-xs border-b border-grey text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
              <tr className="w-full">
                <td className="px-6 py-4 flex justify-start items-start">
                  <figure className="w-[140px] h-[140px] shadow-md">
                    <img
                      className="w-full h-full object-cover"
                      src="https://res.cloudinary.com/daclozrmx/image/upload/v1695636146/veeplush/qdfnw0xvxqyyczhcotqq.png"
                      alt="carted-product"
                    />
                  </figure>

                  <div className="ml-3">
                    <p className="text-[15px] leading-[30px] tracking-[2px]">
                      Raw Virgin Hair
                    </p>

                    <div className="mt-4">
                      <p className="text-sm leading-[24px] tracking-[1.6px] text-grey">
                        Length: 24 inches
                      </p>
                      <p className="text-sm leading-[24px] tracking-[1.6px] text-grey">
                        Style: deep wave
                      </p>

                      <button className="mt-3 text-error opacity-50 flex justify-center items-center px-1 border border-error">
                        <MdDelete className="" />{" "}
                        <p className="text-sm">Remove</p>
                      </button>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-3 align-top">price</td>

                <td className="px-6 py-3 align-top">qty</td>

                <td className="px-6 py-3 align-top">total</td>
              </tr>

              <tr className="w-full">
                <td className="px-6 py-4 flex justify-start items-start">
                  <figure className="w-[140px] h-[140px] shadow-md">
                    <img
                      className="w-full h-full object-cover"
                      src="https://res.cloudinary.com/daclozrmx/image/upload/v1695636146/veeplush/qdfnw0xvxqyyczhcotqq.png"
                      alt="carted-product"
                    />
                  </figure>

                  <div className="ml-3">
                    <p className="text-[15px] leading-[30px] tracking-[2px]">
                      Raw Virgin Hair
                    </p>

                    <div className="mt-4">
                      <p className="text-sm leading-[24px] tracking-[1.6px] text-grey">
                        Length: 24 inches
                      </p>
                      <p className="text-sm leading-[24px] tracking-[1.6px] text-grey">
                        Style: deep wave
                      </p>

                      <button className="mt-3 text-error opacity-50 flex justify-center items-center px-1 border border-error">
                        <MdDelete className="" />{" "}
                        <p className="text-sm">Remove</p>
                      </button>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-3 align-top">price</td>

                <td className="px-6 py-3 align-top">qty</td>

                <td className="px-6 py-3 align-top">total</td>
              </tr>

              <tr className="w-full">
                <td className="px-6 py-4 flex justify-start items-start">
                  <figure className="w-[140px] h-[140px] shadow-md">
                    <img
                      className="w-full h-full object-cover"
                      src="https://res.cloudinary.com/daclozrmx/image/upload/v1695636146/veeplush/qdfnw0xvxqyyczhcotqq.png"
                      alt="carted-product"
                    />
                  </figure>

                  <div className="ml-3">
                    <p className="text-[15px] leading-[30px] tracking-[2px]">
                      Raw Virgin Hair
                    </p>

                    <div className="mt-4">
                      <p className="text-sm leading-[24px] tracking-[1.6px] text-grey">
                        Length: 24 inches
                      </p>
                      <p className="text-sm leading-[24px] tracking-[1.6px] text-grey">
                        Style: deep wave
                      </p>

                      <button className="mt-3 text-error opacity-50 flex justify-center items-center px-1 border border-error">
                        <MdDelete className="" />{" "}
                        <p className="text-sm">Remove</p>
                      </button>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-3 align-top">price</td>

                <td className="px-6 py-3 align-top">qty</td>

                <td className="px-6 py-3 align-top">total</td>
              </tr>
            </tbody>

            <tfoot className="bg-[#F9F9F9]">
              <tr className="">
                <td className="px-6 py-3"></td>
                <td className="px-6 py-3"></td>
                <td className="px-6 py-3">Total</td>
                <td className="px-6 py-3">total</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </Container>
    </PageLayout>
  );
}

export default Cart;
