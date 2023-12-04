import MasterLayout from "../components/nissi/MasterLayout";
import {
  BuildPcPage,
  ContactPage,
  DetailProductPage,
  HomePage,
  ProductsPage,
  RepairComputerOnlinePage,
  ShoppingPage,
  StayComputerPage,
} from "../pages";

const MainRoutes = {
  path: "/",
  element: <MasterLayout />,
  children: [
    { path: "/", element: <HomePage /> },
    { path: "/:id", element: <DetailProductPage /> },
    { path: "/products/:id", element: <ProductsPage /> },
    { path: "/cart", element: <ShoppingPage /> },
    { path: "/buildpc", element: <BuildPcPage /> },
    { path: "/contact", element: <ContactPage /> },
    { path: "/repair-online", element: <RepairComputerOnlinePage /> },
    { path: "/stay-computer", element: <StayComputerPage /> },
  ],
};
export default MainRoutes;
