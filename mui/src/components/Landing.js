import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import imageCone from "../images/imageCone.jpg";
import Link from "@mui/material/Link";

import ActionButton from "./ActionButton";

const paperStyles = {
  padding: "1rem",
  width: "100%",
};

const Landing = () => {
  return (
    <Container style={paperStyles}>
      <Box>
        <ImageList>
          <ImageListItem cols={2}>
            <img src={imageCone} alt="cone" />
          </ImageListItem>
        </ImageList>
      </Box>
      <Box>
        <Paper style={{ padding: "1rem" }} elevation={3}>
          <Typography variant="h2" sx={{ textAlign: "center", m: 1 }}>
            Transform your brand
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center", m: 1 }}>
            We area full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
            <Typography sx={{ fontFamily: "Fraunces" }}>
              {" "}
              <Link color="primary">Learn More</Link>
            </Typography>
          </Typography>
        </Paper>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ActionButton />
      </Box>
    </Container>
  );
};

export default Landing;
