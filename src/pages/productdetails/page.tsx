import { Container, InputNumber, SelectInput } from "../../components";
import { Button, TransparentBtn } from "../../components/buttons";
import PageLayout from "../../layout/PageLayout";

function productDetails() {
  return (
    <PageLayout>
      <div className="mt-28">
        <Container className="py-16">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <figure className="w-full md:w-[35%] h-[250px] md:h-[500px] drop-shadow">
              <img
                className="w-full h-full object-cover"
                src="https://res.cloudinary.com/daclozrmx/image/upload/v1695636146/veeplush/qdfnw0xvxqyyczhcotqq.png"
                alt="veeplush product"
              />
            </figure>

            <div className="w-full md:w-[55%]">
              <div className="w-full bg-white drop-shadow p-4">
                <h1 className="text-xl tracking-[2.172px] md:text-2xl font-bold md:tracking-[4.172px]">
                  Raw Virgin Hair
                </h1>

                <p className="text-purple text-4xl font-bold mt-4">$174.99</p>

                <div className="w-full flex justify-start mt-4">
                  <div className="mr-4">
                    <SelectInput
                      id="length"
                      label="Length"
                      placeholder="Choose a length"
                      options={[12, 14, 16]}
                    />
                  </div>

                  <SelectInput
                    id="style"
                    label="Style"
                    placeholder="Choose a style"
                    options={["straight", "curly", "wavy"]}
                  />
                </div>

                <div className="w-[150px] mt-4">
                  <InputNumber
                    id="quantity"
                    name="quantity"
                    label="Quantity"
                    placeholder={"quantity"}
                    min={1}
                    max={5}
                    onChange={() => {}}
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
                    onClick={() => {}}
                  />
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-4 font-light">
                  Our raw virgin hair is 100% human hair. It is compatible with
                  all different hair types. For best result, we suggest you buy
                  3-4 bundles to cover the entirety of your hair.
                </p>

                <p className="font-light">
                  The longer your hair the more bundles you'll need visit our
                  bundle deals page.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
}

export default productDetails;
