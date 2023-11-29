import MasterLayout from "../components/nissi/MasterLayout";
import {
  DetailProductPage,
  HomePage,
  ProductsPage,
  ShoppingPage,
} from "../pages";

const MainRoutes = {
  path: "/",
  element: <MasterLayout />,
  children: [
    { path: "/", element: <HomePage /> },
    { path: "/:id", element: <DetailProductPage /> },
    { path: "/products/:id", element: <ProductsPage /> },
    { path: "/cart", element: <ShoppingPage /> },
  ],
};
export default MainRoutes;
