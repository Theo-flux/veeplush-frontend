import VeeplushLogo from "../assets/images/veeplush_logo.svg";
import { HiArrowLongLeft } from "react-icons/hi2";

interface IAuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: IAuthLayoutProps) {
  const handleBack = () => {
    window.location.pathname = "/";
  };
  return (
    <main className="w-full h-[100vh] overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-start items-center h-[100%]">
        <figure className="relative h-[100%] top-0 left-0 hidden lg:w-[50%] lg:block">
          <img
            src="https://res.cloudinary.com/daclozrmx/image/upload/v1695806904/veeplush/Rectangle_37_ffnn7p.png"
            className="w-full h-full object-cover"
            alt="frrepik-image"
          />
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.70) 0%, rgba(95, 95, 95, 0.70) 37.4%, rgba(255, 255, 255, 0.70) 100%)",
            }}
            className="absolute w-full h-full top-0 left-0 flex justify-center items-center"
          >
            <figure className="flex items-center">
              <img
                src={VeeplushLogo}
                className="w-[80px] h-[80px]"
                alt="veeplush icon"
              />
              <div className="ml-3">
                <h3 className="hidden md:block font-italic font-extrabold text-4xl font-Rozha">
                  Veeplush Hair
                </h3>
                <p className="font-light text-lg">lush, beauty, poise...</p>
              </div>
            </figure>
          </div>
        </figure>
        <div className="lg:w-[50%] w-full bg-white h-full">
          <div className="w-[90%] max-w-[400px] m-auto h-full">
            <div className="flex flex-col justify-center items-center h-full">
              <figure className="flex items-center mb-12 lg:hidden">
                <img
                  src={VeeplushLogo}
                  className="w-[50px] h-[50px]"
                  alt="veeplush icon"
                />
                <div className="ml-3 text-black">
                  <h3 className="font-italic font-extrabold text-xl">
                    Veeplush Hair
                  </h3>
                  <p className="font-light text">lush, beauty, poise...</p>
                </div>
              </figure>
              <div
                onClick={handleBack}
                className="w-full flex items-center cursor-pointer hover:text-purple hover:underline"
              >
                <HiArrowLongLeft className="" />
                <p className="ml-1 text-xs">Go back</p>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AuthLayout;
