import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { h1Class, imgList, imageListItem } from "../styles/HeaderStyles";
import imageHeader from "../images/mobile/imageHeader.jpg";

const Header = () => {
  return (
    <Box>
      <ImageList sx={{ ...imgList }}>
        <Typography sx={{ ...h1Class }} variant="h1">
          We are creatives
        </Typography>
        <ImageListItem sx={{ ...imageListItem }} cols={2}>
          <img src={imageHeader} alt="half orange" />
        </ImageListItem>
      </ImageList>
    </Box>
  );
};

export default Header;
