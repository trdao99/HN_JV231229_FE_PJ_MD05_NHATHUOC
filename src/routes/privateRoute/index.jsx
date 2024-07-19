import PrivateRoute from "../../features/protectedRouter/PrivateRoute";
import Category from "../../page/adminPage/Category";
import LayoutAdmin from "../../layouts/admin";

const privateRoutes = [
    {
        path: "/admin",
        element: <PrivateRoute element={<LayoutAdmin />} />,
        children:[
            {
                path: "category",
                element : <Category/>,
            },
        ],
    },
];

export default privateRoutes;