import MasterLayout from "../components/nissi/MasterLayout";
import { DetailProductPage, HomePage, ProductsPage } from "../pages";

const MainRoutes = {
  path: "/",
  element: <MasterLayout />,
  children: [
    { path: "/", element: <HomePage /> },
    { path: "/:id", element: <DetailProductPage /> },
    { path: "/products/:id", element: <ProductsPage /> },
  ],
};
export default MainRoutes;
