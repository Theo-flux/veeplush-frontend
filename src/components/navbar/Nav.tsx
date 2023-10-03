import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { thisCustomer } from "../../services/auth";
import VeeplushLogo from "../../assets/images/veeplush_logo.svg";
import { RiShoppingCart2Fill, RiAccountBoxFill } from "react-icons/ri";
import { TransparentBtn, Button } from "../buttons";
import { useEffect, useState } from "react";
import { removeToken } from "../../helpers/authTokens";
import { TCustomerResponse } from "../../types/global";

const navItems = [
  {
    path: "/",
    name: "Home",
  },

  {
    path: "/hairs",
    name: "Hairs",
  },

  {
    path: "/#",
    name: "About us",
  },

  {
    path: "/#",
    name: "Contact",
  },
];

function Nav() {
  const location = useLocation();
  const isActiveRoute = (href: string) => location.pathname === href;
  const [customerData, setCustomerData] = useState<Partial<TCustomerResponse>>(
    {},
  );

  const { data, refetch } = useQuery(["current_customer"], () =>
    thisCustomer(),
  );

  const handleLogOut = () => {
    removeToken();
    setCustomerData({});
  };

  useEffect(() => {
    refetch();
    setCustomerData(data || {});
  }, [data, refetch]);

  return (
    <nav className="fixed z-50 top-0 left-0 w-full bg-white shadow">
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
            <Link to={{ pathname: "/cart" }}>
              <RiShoppingCart2Fill className="text-xl text-veeblack" />
            </Link>

            {Object.keys(customerData).length !== 0 ? (
              <div className="ml-4 flex items-center">
                <div className="flex items-center text-purple">
                  <RiAccountBoxFill className="text-xl" />
                  <small className="ml-1 font-bold">
                    {customerData.username}
                  </small>
                </div>
                <TransparentBtn
                  className="ml-2"
                  text="Logout"
                  onClick={handleLogOut}
                />
              </div>
            ) : (
              <div className="ml-4 flex items-center">
                <Link to={{ pathname: "/login" }}>
                  <TransparentBtn className="mr-2" text="Login" />
                </Link>

                <Link to={{ pathname: "/register" }}>
                  <Button text="Sign up" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-black w-full top-0 left-0">
        <div className="w-[90%] max-w-[300px] mx-auto">
          <ul className="flex justify-between items-center text-white">
            {navItems.map((item, index) => {
              const { name, path } = item;
              return (
                <Link to={path} key={index}>
                  <li
                    className={` ${
                      isActiveRoute(path) && "text-white bg-purple font-medium"
                    } text-center text-[14px] hover:text-violet-600 px-2 py-4 hover:bg-purple transition-all duration-300 cursor-pointer`}
                  >
                    {name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
