import MasterLayout from "../components/nissi/MasterLayout";
import { DetailProductPage, HomePage } from "../pages";

const MainRoutes = {
  path: "/",
  element: <MasterLayout />,
  children: [
    { path: "/", element: <HomePage /> },
    { path: "/:id", element: <DetailProductPage /> },
  ],
};
export default MainRoutes;
