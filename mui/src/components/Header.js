import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { h1Class } from "../styles/HeaderStyles";
import { imageListItem, imgList } from "../styles/LandingStyles";
import imageHeader from "../images/mobile/imageHeader.jpg";

const Header = () => {
  return (
    <Box>
      <Typography sx={{ ...h1Class }} variant="h1">
        We are creatives
      </Typography>
      <ImageList sx={{ ...imgList }}>
        <ImageListItem sx={{ ...imageListItem }} cols={2}>
          <img src={imageHeader} alt="egg" />
        </ImageListItem>
      </ImageList>
    </Box>
  );
};

export default Header;
