import { CTABtn } from "../../components/buttons";
import Arrow from "../../assets/images/more_line.svg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="w-full sm:h-[100vh] pb-8 mt-24">
      <div className="relative h-[450px] sm:h-[80%] bg-[#16161680] w-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <p className="text-white mb-6 text-center text-3xl lg:text-5xl font-Rozha font-extrabold">
            lush, beauty, poise...
          </p>
          <Link to={{ pathname: "/hairs" }}>
            <CTABtn text="Shop Now" className="" />
          </Link>
        </div>

        <div className="absolute bottom-[-40px] w-full text-white flex flex-col justify-center items-center">
          <p className="text-white">More</p>
          <img className="mt-4" src={Arrow} alt="arrow" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
