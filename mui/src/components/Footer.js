import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = () => {
  const linkProps = {
    variant: "subtitle2",
    underline: "hover",
    color: "secondary",
  };
  return (
    <Box sx={{ bgcolor: "warning.main" }}>
      <Box>
        <Typography>
          <Link {...linkProps}>This</Link>{" "}
          <Link {...linkProps}>is my foot,</Link>{" "}
          <Link {...linkProps}>smell it!</Link>
        </Typography>
      </Box>
      <Box>Icons area</Box>
    </Box>
  );
};

export default Footer;
