import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import { CartProvider } from "./Context/cartContext.jsx";
import App from "./App.jsx";
import Home from "./Components/Home.jsx";
import Product from "./Components/Product.jsx";
import About from "./Components/About.jsx";
import Cart from "./Components/Cart.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/product",
        element: <Product />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
