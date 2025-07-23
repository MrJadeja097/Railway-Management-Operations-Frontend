import { createBrowserRouter, type RouteObject } from "react-router";
import { AppLayout } from "../components";
import { ActiveRoutesRoutes } from "../features/active-routes/routes";
import { RailLineRoutes } from "../features/rail-lines";
import { StaffRoutes } from "../features/staff";
import { StationRoutes } from "../features/stations";
import { TrainRoutes } from "../features/trains";
import { HomeRoute } from "../features/home";
import { LoginForm } from "../features/auth/Components/LoginForm";
import { RequireAuth } from "../features/auth/RequireAuth";


const routes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/*",
    element: <AppLayout />,
    children: [
      {
        path: "/*",
        element: <HomeRoute />,
      },
      {
        path: "active_routes/*",
        element: <ActiveRoutesRoutes />,
      },
      {
        path: "stations/*",
        element: <StationRoutes />,
      },
      {
        path: "trains/*",
        element: <TrainRoutes />,
      },
      {
        element: <RequireAuth />,
        children: [
          {
            path: "rail_lines/*",
            element: <RailLineRoutes />,
          },
          {
            path: "staff/*",
            element: <StaffRoutes />,
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
