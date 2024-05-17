import { RouteType } from "./types";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
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
    element: <About />,
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