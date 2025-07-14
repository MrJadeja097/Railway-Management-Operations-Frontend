// // import { ProductRoutes } from "@/features/product/routes";
// import { createBrowserRouter, type RouteObject } from "react-router";
// import { AppLayout } from "../components";
// import { ProductRoutes } from "../features/product/routes";
// import { ProductList2 } from "../features/product/components";

// const routes: RouteObject[] = [
//   {
//     path: "/",
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/products",
//         children: [{
//           path:"",          
//           element: <ProductRoutes />,
//         },
//           {
//           path: 'hello',  // -> /products/hello
//           element : <ProductList2 />
//         }] // We can also manage all routes here rather than create specific route file
//       },
//     ],
//   },
// ];
// export const router = createBrowserRouter(routes);

// import { ProductRoutes } from "@/features/product/routes";
import { createBrowserRouter, type RouteObject } from "react-router";
import { AppLayout } from "../components";
import { ActiveRoutesRoutes } from "../features/active-routes/routes";
import { RailLineRoutes } from "../features/rail-lines";
import { StaffRoutes } from "../features/staff";
import { StationRoutes } from "../features/stations";
import { TrainRoutes } from "../features/trains";


const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/active_routes/*",
        element: <ActiveRoutesRoutes /> // We can also manage all routes here rather than create specific route file
      },
      {
        path:"/rail_lines/*",
        element: <RailLineRoutes />
      },
      {
        path:'/staff/*',
        element: <StaffRoutes />
      },
      {
        path:'/stations/*',
        element: <StationRoutes />
      },
      {
        path:'/trains/*',
        element: <TrainRoutes />
      }
    ],
  },
];

export const router = createBrowserRouter(routes);
