import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./publicRoute";
import privateRoutes from "./privateRoute";

const routes = createBrowserRouter([...publicRoutes, ...privateRoutes]);

export default routes;