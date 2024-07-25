import PrivateRoute from "../../features/protectedRouter/PrivateRoute";
import Category from "../../page/adminPage/Category";
import LayoutAdmin from "../../layouts/admin";
import User from "../../page/adminPage/User";
import Ct2 from "../../page/adminPage/Ct2";
import Product from "../../page/adminPage/Product";
import UserDetail from "../../layouts/user/userDetail/UserDetail";
import Banner from "../../page/adminPage/Banner";
import ProductDetail from "../../page/adminPage/ProductDetail";

const privateRoutes = [
  {
    path: "/admin",
    element: <PrivateRoute element={<LayoutAdmin />} />,
    children: [
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "ct2",
        element: <Ct2 />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "banner",
        element: <Banner />,
      },
      {
        path: "product-detail/:id",
        element: <ProductDetail />,
      }
    ],
  },
  {
    path: "/userdetail",
    element: <PrivateRoute element={<UserDetail />} />,
  },
];

export default privateRoutes;
