import Home from "../../page/home/Home";
import ProductDetail from "../../page/home/ProductDetail";

const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/productDetail",
    element: <ProductDetail />,
  },
];

export default publicRoutes;
