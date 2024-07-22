import PrivateRoute from "../../features/protectedRouter/PrivateRoute";
import Category from "../../page/adminPage/Category";
import LayoutAdmin from "../../layouts/admin";
import User from "../../page/adminPage/User";

const privateRoutes = [
    {
        path: "/admin",
        element: <PrivateRoute element={<LayoutAdmin />} />,
        children:[
            {
                path: "category",
                element : <Category/>,
            },
            {
                path: "user",
                element: <User />,
            },
        ],
    },
];

export default privateRoutes;