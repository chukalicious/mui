import ImageList from "@mui/material/ImageList";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { h1Class } from "../styles/HeaderStyles";

const Header = () => {
  return (
    <Box>
      <Typography sx={{ ...h1Class }} variant="h1">
        We are creatives
      </Typography>
    </Box>
  );
};

export default Header;
