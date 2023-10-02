import { Login, Registration, Products, ProductDetails } from "./pages";

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
];
