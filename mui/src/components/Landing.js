// mui Library imports
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

//image imports
import imageCone from "../images/imageCone.jpg";
import imageTransform from "../images/mobile/imageTransform.jpg";

// Style Imports
import {
  landingLayout,
  paperStyles,
  paperBox,
  imgTextWrapper,
  imgList,
  imageListItem,
  pLink,
  body1Style,
} from "../styles/LandingStyles";

//Component Imports
import ActionButton from "./ActionButton";

const Landing = () => {
  return (
    <Box>
      <Box sx={{ mb: -1 }}>
        <Box sx={{ ...imgTextWrapper }}>
          <Box sx={{ ...landingLayout }}>
            <ImageList sx={{ ...imgList }}>
              <ImageListItem sx={{ ...imageListItem }} cols={2}>
                <img src={imageTransform} alt="egg" />
              </ImageListItem>
            </ImageList>
          </Box>
          <Box sx={{ ...paperBox }}>
            <Paper sx={{ ...landingLayout, ...paperStyles }} elevation={0}>
              <Typography variant="h2">Transform your brand</Typography>
              <Typography variant="body1" sx={{ ...body1Style }}>
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
                <Typography sx={{ ...pLink }}>
                  <Link>Learn More</Link>
                </Typography>
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
      <Box sx={{ ...imgTextWrapper }}>
        <Box sx={{ ...landingLayout }}>
          <ImageList sx={{ ...imgList }}>
            <ImageListItem cols={2}>
              <img src={imageCone} alt="icecream cone" />
            </ImageListItem>
          </ImageList>
        </Box>
        <Box sx={{ ...paperBox }}>
          <Paper sx={{ ...landingLayout, ...paperStyles }} elevation={0}>
            <Typography variant="h2">
              Stand out to the right audience
            </Typography>
            <Typography variant="body1" sx={{ ...body1Style }}>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we'll buid and
              extend your brand in digital places.
              <Typography sx={{ ...pLink }}>
                {" "}
                <Link>Learn More</Link>
              </Typography>
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
