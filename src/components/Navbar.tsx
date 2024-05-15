import React, { useState } from "react";
import { styled } from "@mui/material/styles";

import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import ArrowBack from "@mui/icons-material/ArrowBack";
import AssignmentInd from "@mui/icons-material/AssignmentInd";
import Home from "@mui/icons-material/Home";
import Apps from "@mui/icons-material/Apps";
import ContactMail from "@mui/icons-material/ContactMail";

import avatar from "../assets/avatar.png";
import Footer from "./navbar-footer/Footer";



const StyledSideList = styled(Box)(() => ({
    width: 250,
    background: "#511",
    height: "100%",
  }));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
}));

const StyledListItem = styled(ListItem)(() => ({
    color: "tan",
}));

const StyledListItemIcon = styled(ListItemIcon)(() => ({
    color: "tan",
}));

const StyledAppBar = styled(AppBar)(() => ({
    background: "#222",
    margin: 0,
}));

const StyledArrowBack = styled(ArrowBack)(() => ({
    color: "tomato",
}));

const StyledTypography = styled(Typography)(() => ({
    color: "tan",
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/home" },
  { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
  { listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const sideList = () => (
    <StyledSideList component="div">
      <StyledAvatar src={avatar} alt="Mahmudul Alam" />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <StyledListItem
            role="button"
            key={i}
            onClick={() => setOpen(false)}
            ref={() =>item.listPath}
          >
            <StyledListItemIcon >
              {item.listIcon}
            </StyledListItemIcon>
            <ListItemText primary={item.listText} />
          </StyledListItem>
        ))}
      </List>
    </StyledSideList>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <StyledAppBar position="static">
          <Toolbar>
            <IconButton onClick={() => setOpen(true)}>
              <StyledArrowBack />
            </IconButton>
            <StyledTypography variant="h5">
              Portfolio
            </StyledTypography>
          </Toolbar>
        </StyledAppBar>
      </Box>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
