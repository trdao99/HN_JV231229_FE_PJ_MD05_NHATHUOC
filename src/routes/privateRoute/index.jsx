import PrivateRoute from "../../features/protectedRouter/PrivateRoute";
import Category from "../../page/adminPage/Category";
import LayoutAdmin from "../../layouts/admin";
import User from "../../page/adminPage/User";
import Ct2 from "../../page/adminPage/Ct2";
import Ct3 from "../../page/adminPage/Ct3";
import UserDetail from "../../layouts/user/userDetail/UserDetail";
import Banner from "../../page/adminPage/Banner";

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
        path: "ct3",
        element: <Ct3 />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "banner",
        element: <Banner />,
      },
    ],
  },
  {
    path: "/userdetail",
    element: <PrivateRoute element={<UserDetail />} />,
  },
];

export default privateRoutes;
