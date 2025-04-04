import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <Stack
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100%"}
        width={"100%"}
        gap={2}
      >
        <Stack display={"flex"} flexDirection={"row"} gap={2}>
          <Typography variant="h2" color="red">
            404
          </Typography>
          <Typography variant="h2" color="white">
            Woops
          </Typography>
        </Stack>
        <Typography variant="body1" color="white">
          Something its not OK here please go back
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          sx={{ color: "white" }}
          onClick={() => navigate("/")}
        >
          Go Back
        </Button>
      </Stack>
    </Box>
  );
}
export default NotFound;
