import { lazy } from "react";
import Layout from "../components/Layout/Layout";
import RouterAdminLayout from "../modules/Admin/module";
import RouterLayout from "../pages/module";
import NotFound from "../pages/NotFound/NotFound";
import { RouterInterface } from "./type";
const AdminLayout = lazy(() => import("../components/Layout/AdminLayout"));
const AdminLoginForm = lazy(() => import("../components/core/AdminLoginForm"));

const RouterView: RouterInterface[] = [
  {
    path: "/",
    public: true,
    name: "Layout",
    element: () => <Layout />,
    children: [...RouterLayout],
  },
  {
    path: "*",
    public: true,
    name: "NotFound",
    children: [],
    element: () => <NotFound />,
  },
  {
    name: "Admin",
    path: "admin",
    index: false,
    public: true,
    children: [],
    element: () => <AdminLoginForm />,
  },
  {
    name: "Dashboard",
    path: "dashboard",
    index: true,
    public: true,
    children: [...RouterAdminLayout],
    element: () => <AdminLayout />,
  }
];

export default RouterView;
