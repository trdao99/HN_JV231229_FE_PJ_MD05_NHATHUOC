import Admin from "../../page/adminPage/Admin";
import Ct1 from "../../page/adminPage/Ct1";
import Ct2 from "../../page/adminPage/Ct2";
import Ct3 from "../../page/adminPage/Ct3";
import User from "../../page/adminPage/User";

const privateRoutes = [
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "ct1",
        element: <Ct1 />,
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
    ],
  },
];

export default privateRoutes;
