import { RouterInterface } from "../../router/type";
import { AdminBill, AdminBlog, AdminProduct, AdminUser } from "../Admin";
import AdminBooking from "./AdminBooking";
import AdminComment from "./AdminComment";
import AdminContact from "./AdminContact";
import AdminHome from "./AdminHome";

const RouterAdminLayout: RouterInterface[] = [
  {
    name: "AdminUser",
    path: "users",
    index: true,
    public: true,
    children: [],
    element: () => <AdminUser />,
  },
  {
    name: "AdminProduct",
    path: "products",
    index: true,
    public: true,
    children: [],
    element: () => <AdminProduct />,
  },
  {
    name: "AdminBlog",
    path: "blogs",
    index: true,
    public: true,
    children: [],
    element: () => <AdminBlog />,
  },
  {
    name: "AdminBooking",
    path: "bookings",
    index: true,
    public: true,
    children: [],
    element: () => <AdminBooking />,
  },
  {
    name: "AdminContact",
    path: "contacts",
    index: true,
    public: true,
    children: [],
    element: () => <AdminContact />,
  },
  {
    name: "AdminComment",
    path: "comments",
    index: true,
    public: true,
    children: [],
    element: () => <AdminComment />,
  },
  {
    name: "AdminBill",
    path: "bill",
    index: true,
    public: true,
    children: [],
    element: () => <AdminBill />,
  },
  {
    name: "AdminHome",
    path: "home",
    index: true,
    public: true,
    children: [],
    element: () => <AdminHome />,
  }
];

export default RouterAdminLayout;
