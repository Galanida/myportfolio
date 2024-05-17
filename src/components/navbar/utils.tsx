import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import InfoIcon from "@mui/icons-material/Info";

export const menuItems = [
  { listIcon: <HomeIcon />, listText: "Home", listPath: "/myportfolio/" },
  {
    listIcon: <AssignmentIndIcon />,
    listText: "Resume",
    listPath: "/myportfolio/cv",
  },
  {
    listIcon: <InfoIcon />,
    listText: "About",
    listPath: "/myportfolio/about",
  },
  {
    listIcon: <AppsIcon />,
    listText: "Projects",
    listPath: "/myportfolio/projects",
  },
  {
    listIcon: <ContactMailIcon />,
    listText: "Contact",
    listPath: "/myportfolio/contact",
  },
];