import { CTABtn } from "../../components/buttons";
import Arrow from "../../assets/images/more_line.svg";

function Hero() {
  return (
    <section className="w-full sm:h-[100vh] pb-8">
      <div className="relative h-[450px] sm:h-[80%] bg-[#16161650] w-full flex flex-col justify-center items-center">
        <div>
          <CTABtn text="Shop Now" className="" />
        </div>

        <div className="absolute bottom-[-20px] w-full text-white flex flex-col justify-center items-center">
          <p className="text-white">More</p>
          <img
            className="mt-4"
            src={Arrow}
            alt="arrow"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
