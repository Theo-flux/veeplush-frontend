import { Container } from "../../components";

interface ICollectionsProps {
  text: string;
}

const collection = [
  {
    url: "https://res.cloudinary.com/daclozrmx/image/upload/v1695795688/veeplush/Frame_132_yujs5v.png",
    name: "Wigs",
  },
  {
    url: "https://res.cloudinary.com/daclozrmx/image/upload/v1695795534/veeplush/Frame_130_h6nwoz.svg",
    name: "Closures",
  },

  {
    url: "https://res.cloudinary.com/daclozrmx/image/upload/v1695795664/veeplush/Frame_21_1_hff4s5.png",
    name: "Frontals",
  },
];

function Collections({ text }: ICollectionsProps) {
  return (
    <section className="py-4">
      <div className="bg-[#161616e3] py-16">
        <Container>
          <div className="">
            <h2 className="text-center text-white font-bold text-[24px] md:text-[32px]">
              {text}
            </h2>

            <div className="flex flex-col items-center md:flex-row justify-between mt-6">
              {collection.map((hair, index) => {
                const { url, name } = hair;

                return (
                  <figure
                    key={index}
                    className="relative w-[300px] max-w-[375px] h-[auto] mb-4 last:mb-0 md:mb-0"
                  >
                    <img
                      src={url}
                      className="w-[100%] h-[100%] object-contain"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-[#F748EA50] flex justify-center items-center hover:bg-[#C4C4C450] transition-all duration-300 group">
                      <p className="text-white font-bold ring-1 ring-white p-1 text-[30px] tracking-[3px] group-hover:bg-purple group-hover:text-white group-hover:ring-0 transition-all duration-300 cursor-pointer group-hover:shadow-2xl">
                        {name}
                      </p>
                    </div>
                  </figure>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Collections;
