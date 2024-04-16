import {
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

function TheaterSeats() {
  return (
    <Stack>
      <Stack>
        <Stack
          direction="row"
          spacing={2}
          alignContent="center"
          justifyContent="center"
        >
          <Typography>D</Typography>
          <IconButton size="small">1</IconButton>
          <IconButton size="small">2</IconButton>
          <IconButton size="small">3</IconButton>
          <IconButton size="small">4</IconButton>
          <IconButton size="small">5</IconButton>
          <IconButton size="small">6</IconButton>
          <Typography>D</Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          alignContent="center"
          justifyContent="center"
        >
          <Typography>C</Typography>
          <IconButton size="small">1</IconButton>
          <IconButton size="small">2</IconButton>
          <IconButton size="small">3</IconButton>
          <IconButton size="small">4</IconButton>
          <IconButton size="small">5</IconButton>
          <IconButton size="small">6</IconButton>
          <Typography>C</Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          alignContent="center"
          justifyContent="center"
        >
          <Typography>B</Typography>
          <IconButton size="small">1</IconButton>
          <IconButton size="small">2</IconButton>
          <IconButton size="small">3</IconButton>
          <IconButton size="small">4</IconButton>
          <IconButton size="small">5</IconButton>
          <IconButton size="small">6</IconButton>
          <Typography>B</Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          alignContent="center"
          justifyContent="center"
        >
          <Typography>A</Typography>
          <IconButton size="small">1</IconButton>
          <IconButton size="small">2</IconButton>
          <IconButton size="small">3</IconButton>
          <IconButton size="small">4</IconButton>
          <IconButton size="small">5</IconButton>
          <IconButton size="small">6</IconButton>
          <Typography>A</Typography>
        </Stack>
      </Stack>
      <Stack direction="column" alignItems="center">
        <Typography>Màn hình</Typography>
        <Divider
          sx={{ width: "100%", height: "4px", backgroundColor: "orange" }}
        />
      </Stack>
    </Stack>
  );
}

export default TheaterSeats;
