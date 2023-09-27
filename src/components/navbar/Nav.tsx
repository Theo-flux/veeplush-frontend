import { Link, useLocation } from "react-router-dom";
import VeeplushLogo from "../../assets/images/veeplush_logo.svg";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { TransparentBtn, Button } from "../buttons";

const navItems = [
  {
    path: "/",
    name: "Home",
  },

  {
    path: "/#",
    name: "About us",
  },

  {
    path: "/#",
    name: "Contact",
  },

  {
    path: "/#",
    name: "Hairs",
  },
];

function Nav() {
  const location = useLocation();
  const isActiveRoute = (href: string) => location.pathname === href;

  return (
    <nav className="sticky z-50 top-0 left-0 w-full bg-white shadow">
      <div className="w-[90%] max-w-[1100px] mx-auto">
        <div className="flex justify-between items-center py-2">
          <figure className="flex items-center">
            <img
              src={VeeplushLogo}
              className="w-[40px] h-[40px]"
              alt="veeplush icon"
            />
            <p className="hidden md:block font-semibold ml-2">Veeplush Hair</p>
          </figure>

          <div className="flex items-center">
            <RiShoppingCart2Fill className="text-xl text-veeblack" />

            <div className="ml-4 flex items-center">
              <TransparentBtn className="mr-2" text="Login" />
              <Button text="Sign up" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black w-full top-0 left-0">
        <div className="w-[90%] max-w-[300px] mx-auto">
          <ul className="flex justify-between items-center text-white">
            {navItems.map((item, index) => {
              const { name, path } = item;
              return (
                <li
                  key={index}
                  className={` ${
                    isActiveRoute(path) && "text-white bg-purple font-medium"
                  } text-center text-[14px] hover:text-violet-600 px-2 py-4 hover:bg-purple transition-all duration-300 cursor-pointer`}
                >
                  <Link to={path}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
