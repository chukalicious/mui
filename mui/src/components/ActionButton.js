import Button from "@mui/material/Button";

const ActionButton = () => {
  return (
    <Button
      sx={{ fontFamily: "'Fraunces', serif" }}
      color="secondary"
      style={{
        marginTop: "1rem",
        borderRadius: "2rem",
        padding: ".5rem 1.75rem",
        fontSize: "1.2rem",
      }}
      variant="contained"
    >
      Contact
    </Button>
  );
};

export default ActionButton;
