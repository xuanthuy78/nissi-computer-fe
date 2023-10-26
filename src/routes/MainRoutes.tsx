import MasterLayout from "../components/nissi/MasterLayout";
import { HomePage } from "../pages";

const MainRoutes = {
  path: "/",
  element: <MasterLayout />,
  children: [{ path: "/", element: <HomePage /> }],
};
export default MainRoutes;
