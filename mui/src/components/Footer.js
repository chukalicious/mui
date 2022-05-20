import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <Box>
      <Box>
        <Typography variant="subtitle2">
          <Link>This</Link> <Link>is my foot,</Link> <Link>smell it!</Link>
        </Typography>
      </Box>
      <Box>Icons area</Box>
    </Box>
  );
};

export default Footer;
