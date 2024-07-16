import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import App from "../App";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import UserAction from "../Components/UserAction";
import AgentPage from "../Pages/AgentPage";
import AdminPage from "../Pages/AdminPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/user",
        element: <UserAction />,
      },
      {
        path: "/agent",
        element: <AgentPage />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
      },
    ],
  },
]);
