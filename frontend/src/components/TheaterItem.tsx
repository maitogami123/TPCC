import { Box, Button, Grid, Stack, Typography } from "@mui/material";

function TheaterItem() {
  return (
    <Stack flexGrow={1}>
      <Typography>Galaxy Nguyễn Du</Typography>
      <Grid container flexGrow={1}>
        <Grid item xs={4}>
          <Typography>2D Phụ đề</Typography>
        </Grid>
        <Grid item xs={8}>
          <Stack direction="row" gap={1} flexWrap="wrap">
            <Button variant="outlined">16:15</Button>
            <Button variant="outlined">16:15</Button>
            <Button variant="outlined">16:15</Button>
            <Button variant="outlined">16:15</Button>
            <Button variant="outlined">16:15</Button>
            <Button variant="outlined">16:15</Button>
            <Button variant="outlined">16:15</Button>
            <Button variant="outlined">16:15</Button>
            <Button variant="outlined">16:15</Button>
            <Button variant="outlined">16:15</Button>
            <Button variant="outlined">16:15</Button>
            <Button variant="outlined">16:15</Button>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default TheaterItem;
