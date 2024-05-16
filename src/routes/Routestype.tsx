import { RouteType } from "./types";
import Home from "../pages/Home/Home";

export const routesConfig: RouteType[] =  [
 {
    path: "/myportfolio/",
    element: <Home />,
 },
 {
    path: "/myportfolio/about",
    element: 'about',
 },
 {
    path: "/myportfolio/projects",
    element: "projects",
 },
 {
   path: "/myportfolio/cv",
   element: "CV",
 },
 {
   path: "/myportfolio/contact",
   element: "CV",
 },
]