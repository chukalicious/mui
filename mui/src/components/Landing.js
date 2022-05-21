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
import { landingLayout, paperStyles, paperBox } from "../styles/LandingStyles";

//Component Imports
import ActionButton from "./ActionButton";

const Landing = () => {
  return (
    <Box>
      <Box sx={{ mb: -1 }}>
        <Box
          sx={{
            // border: "purple solid 3px",
            display: "flex",
            flexDirection: "column",
            marginBottom: "-3.2rem",
          }}
        >
          <Box sx={{ ...landingLayout }}>
            <ImageList sx={{ p: 0, mb: "-.5rem", mt: 0 }}>
              <ImageListItem
                sx={{
                  // border: "green solid 3px",
                  m: 0,
                }}
                cols={2}
              >
                <img src={imageTransform} alt="egg" />
              </ImageListItem>
            </ImageList>
          </Box>
          <Box sx={{ ...paperBox }}>
            <Paper sx={{ ...landingLayout, ...paperStyles }} elevation={0}>
              <Typography variant="h2" sx={{ textAlign: "center", m: 1 }}>
                Transform your brand
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center", m: 1 }}>
                We area full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
                <Typography sx={{ fontFamily: "Fraunces" }}>
                  {" "}
                  <Link color="primary">Learn More</Link>
                </Typography>
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
      <Box sx={{ ...landingLayout }}>
        <ImageList>
          <ImageListItem cols={2}>
            <img src={imageCone} alt="icecream cone" />
          </ImageListItem>
        </ImageList>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ActionButton />
      </Box>
    </Box>
  );
};

export default Landing;
