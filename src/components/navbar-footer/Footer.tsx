import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import { styled } from "@mui/material/styles";

const StyledBottomNavigation = styled(BottomNavigation)(() => ({
    background: "#222",
    height: "55px",
    overflow: "hidden",
  }));

const StyledBottomNavigationAction = styled(BottomNavigationAction)(() => ({
    "& .MuiSvgIcon-root": {
        fill: "tan",
        "&:hover": {
          fill: "tomato",
          fontSize: "1.8rem",
        },
      },
  }));

const Footer = () => {

  return (
    <StyledBottomNavigation>
      <StyledBottomNavigationAction icon={<Facebook />}/>
      <StyledBottomNavigationAction icon={<Twitter />}/>
      <StyledBottomNavigationAction icon={<Instagram />} />
    </StyledBottomNavigation>
  );
};
export default Footer;
