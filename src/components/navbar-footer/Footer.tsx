import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
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
    paddingTop: "1rem"
  }));

  const Footer = () => {
    const facebookLink = "https://www.facebook.com/jenrey.galanida";
    const linkedinLink = "https://www.linkedin.com";
    const githubLink = "https://www.github.com";
  
    return (
      <StyledBottomNavigation>
        <a href={facebookLink} target="_blank" rel="noreferrer">
          <StyledBottomNavigationAction icon={<Facebook />} />
        </a>
        <a href={linkedinLink} target="_blank" rel="noreferrer">
          <StyledBottomNavigationAction icon={<LinkedIn />} />
        </a>
        <a href={githubLink} target="_blank" rel="noreferrer">
          <StyledBottomNavigationAction icon={<GitHub />} />
        </a>
      </StyledBottomNavigation>
    );
  };
export default Footer;
