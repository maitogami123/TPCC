import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

function SnackItem() {
  return (
    <Grid container gap={2} direction="row">
      <Grid item xs={2}>
        <img
          src="https://cdn.galaxycine.vn/media/2024/3/29/menuboard-coonline-2024-combo1-min_1711699834430.jpg"
          alt=""
          style={{ width: "100%", borderRadius: "10px" }}
        />
      </Grid>
      <Grid item flexGrow={1}>
        <Typography>iCombo</Typography>
        <Typography>1 ly nước ngọt size L + 1 hộp bắp + 1 snack</Typography>
        <Stack
          direction="row"
          flexGrow={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>Giá: 100.000đ</Typography>
          <ButtonGroup variant="outlined" aria-label="Basic button group">
            <Button>-</Button>
            <Button disabled>0</Button>
            <Button>+</Button>
          </ButtonGroup>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default SnackItem;
