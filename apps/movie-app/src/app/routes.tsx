import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/public/home/home.page";
import { MainLayout } from "./project/layouts/main-layout/main.layout";
import { ErrorPage } from "./pages/error/error.page";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <HomePage /> },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);
