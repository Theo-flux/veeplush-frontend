import { CTABtn } from "../../components/buttons";

function Hero() {
  return (
    <section className="w-full sm:h-[100vh] pb-8">
      <div className="relative h-[100%] bg-[#16161650] w-full flex flex-col justify-center items-center">
        <div>
          <CTABtn text="Shop Now" className="" />
        </div>

        <div className="absolute bottom-[-20px] w-full text-white flex flex-col justify-center items-center">
          <p className="text-white">More</p>
          <div className="h-[80px] md:h-[136px] w-[1px] bg-white mt-4"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
