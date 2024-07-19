import { createBrowserRouter } from "react-router-dom";
import privateRoutes from "./private";
import publicRoutes from "./public";

const routes = createBrowserRouter([...publicRoutes, ...privateRoutes]);

export default routes;
