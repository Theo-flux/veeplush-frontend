import { Container } from "../../components";
import PageLayout from "../../layout/PageLayout";
import ProductCard from "./ProductCard";

function Products() {
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

              <p className="text-white">150 products</p>
            </Container>
          </div>
        </div>

        <Container className="bg-white py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-auto gap-2">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Container>
      </div>
    </PageLayout>
  );
}

export default Products;
