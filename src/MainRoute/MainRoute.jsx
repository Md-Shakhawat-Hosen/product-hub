

import { createBrowserRouter } from "react-router-dom";
import Contact from "../Contact/Contact";
import Home from "../Navbar/Home/Home";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";
import ProductsDetails from "../ProductsCard/ProductsDetails/ProductsDetails";
import SignUp from "../SignUp/SignUp";
import About from "./About/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children: [
      {
        path: "/",
        loader: () => fetch("https://dummyjson.com/products"),
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/products",
        loader: () => fetch("https://dummyjson.com/products"),
        element: <Products></Products>,
      },
      {
        path: "/product/:id",
        loader: ({params}) => fetch (`https://dummyjson.com/products/${params.id}`),
        element: <ProductsDetails></ProductsDetails>
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);


export default router;