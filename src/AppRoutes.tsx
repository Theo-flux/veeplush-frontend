import {
  Login,
  Registration,
  Products,
  ProductDetails,
  Cart,
  Checkout,
} from "./pages";

export const AppRoutes = [
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Registration />,
  },

  {
    path: "/hairs",
    element: <Products />,
  },
  {
    path: "/hair/details/:id",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
];
