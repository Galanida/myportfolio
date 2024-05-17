import { RouteType } from "./types";
import Home from "../pages/Home/Home";
import Home2 from "../pages/Home/Home2";
import ResumeNew from "../pages/Resume/ResumeNew";

export const routesConfig: RouteType[] =  [
 {
    path: "/myportfolio/",
    element: <Home />,
 },
 {
   path: "/myportfolio/cv",
   element: <ResumeNew />,
 },
 {
    path: "/myportfolio/about",
    element: <Home2 />,
 },
 {
    path: "/myportfolio/projects",
    element: "projects",
 },
 {
   path: "/myportfolio/contact",
   element: "contact",
 },
]