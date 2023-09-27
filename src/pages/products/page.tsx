import { Container } from "../../components";
import PageLayout from "../../layout/PageLayout";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <PageLayout>
      <div className="relative w-full mt-28">
        <div className="fixed w-full z-40">
          <div className="bg-black mt-1 w-full">
            <Container className="flex justify-between items-cente py-2">
              <div className="text-white flex justify-start items-center">
                <p>category:</p>
                <p>Sort by:</p>
              </div>

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
