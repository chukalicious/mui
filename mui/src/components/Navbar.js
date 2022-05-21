import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { toolbarStyles } from "../styles/NavbarStyles";

import Title from "./Title";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static">
        <Toolbar sx={{ ...toolbarStyles }}>
          <Title />
          <HamburgerMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
