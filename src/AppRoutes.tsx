import { Login, Registration, Products } from "./pages";

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
];
