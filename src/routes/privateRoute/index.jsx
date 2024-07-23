import PrivateRoute from "../../features/protectedRouter/PrivateRoute";
import Category from "../../page/adminPage/Category";
import LayoutAdmin from "../../layouts/admin";
import User from "../../page/adminPage/User";
import Ct2 from "../../page/adminPage/Ct2";
import Product from "../../page/adminPage/Product";

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
    ],
  },
];

export default privateRoutes;
