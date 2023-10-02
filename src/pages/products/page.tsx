import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { allProducts } from "../../services/products";
import PageLayout from "../../layout/PageLayout";
import ProductCard from "./ProductCard";
import { Container } from "../../components";
import { TProducts } from "../../types/global";
import { ClipLoader } from "react-spinners";

function Products() {
  const [products, setProducts] = useState<Array<Partial<TProducts>>>([]);
  const { data, isLoading } = useQuery(["all_products"], () => allProducts());

  useEffect(() => {
    setProducts(data || []);
  }, [data, isLoading]);

  console.log(data);

  return (
    <PageLayout>
      <div className="relative w-full mt-28">
        <div className="fixed w-full z-40">
          <div className="bg-black mt-1 w-full">
            <Container className="flex flex-col md:flex-row justify-between md:items-center py-2 relative">
              {/* <div className="absolute text-white flex flex-col md:flex-row justify-start md:items-center items-start w-fit mb-2 md:mb-0">
                <div className="w-fit mr-2 mb-2 md:mb-0">
                  <InputFilter
                    id="category"
                    label="category:"
                    options={["Wigs", "Frontals", "Bundles"]}
                  />
                </div>

                <div className="w-fit">
                  <InputFilter
                    id="sort_by"
                    label="price:"
                    options={["price(Low - High)", "price(High - Low)"]}
                  />
                </div>
              </div> */}

              <p className="text-white">
                {isLoading || products.length} products
              </p>
            </Container>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center w-full">
            <ClipLoader size={20} color="#fff" />
          </div>
        ) : (
          <Container className="bg-white py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-auto gap-2">
            {products.map((product, index) => {
              const { image, id, price, name } = product;

              return (
                <ProductCard
                  key={index}
                  image={image || ""}
                  name={name || ""}
                  id={id || 0}
                  price={price || 0}
                />
              );
            })}
          </Container>
        )}
      </div>
    </PageLayout>
  );
}

export default Products;
