import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import imageCone from "../images/imageCone.jpg";

import ActionButton from "./ActionButton";

const Landing = () => {
  return (
    <Container>
      <Box>
        <ImageList>
          <ImageListItem cols={2}>
            <img src={imageCone} alt="cone" />
          </ImageListItem>
        </ImageList>
      </Box>
      <Box>
        <Paper elevation={3}>
          <Typography variant="body1">This is my box, fuck it</Typography>
        </Paper>
      </Box>
      <Box>
        <ActionButton />
      </Box>
    </Container>
  );
};

export default Landing;
