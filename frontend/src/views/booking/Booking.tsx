import {
  Grid,
  Typography,
  Stack,
  Button,
  Box,
  Step,
  StepLabel,
  Stepper,
  Divider,
} from "@mui/material";
import ResponsiveAppBar from "../../layouts/AppBar";
import TheaterSeats from "../../sections/TheaterSeats";
import React from "react";
import SnackItem from "../../components/SnackItem";

const steps = [
  "Select movie/date/time",
  "Select seats",
  "Snacks & drinks",
  "Payment",
  "Confirm",
];

function Booking() {
  const [activeStep, setActiveStep] = React.useState(1);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const handleNext = () => {
    let newSkipped = skipped;

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(1);
  };

  return (
    <>
      <ResponsiveAppBar />
      <Grid container justifyContent="space-between" paddingTop={4}>
        <Grid item xs={6}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep === 1 && (
                <>
                  <Grid container flexGrow={1} paddingTop={4} paddingBottom={4}>
                    <Grid item xs={4}>
                      <Typography>Đổi suất chiếu</Typography>
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
                  <TheaterSeats />
                </>
              )}
              {activeStep === 2 && <SnackItem />}
            </React.Fragment>
          )}
        </Grid>
        <Grid
          item
          xs={4}
          padding={2}
          sx={{
            backgroundColor: "white",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <Grid container gap={2}>
            <Grid item xs={4}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                src="https://cdn.galaxycine.vn/media/2024/4/10/ghostbusters-frozen-empire-500_1712719794740.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={6}>
              <Typography>Biệt Đội Săn Ma: Kỷ Nguyên Băng Giá</Typography>
              <Typography>Galaxy Nguyễn Du 2D Phụ đề</Typography>
            </Grid>
          </Grid>
          <Stack>
            <Box>
              <Typography>Galaxy Nguyễn Du - RAP 4</Typography>
              <Typography>Suất: 21:00 - Thứ Ba, 16/04/2024</Typography>
            </Box>
            <Divider />
            <Stack
              direction="row"
              gap={1}
              justifyContent="space-between"
              paddingTop={1}
              paddingBottom={1}
            >
              <Box>
                <Typography>4x ghế đơn</Typography>
                <Typography>Ghế: D5, D6, D7, D8</Typography>
              </Box>
              <Typography>220.000đ</Typography>
            </Stack>
            <Divider />
            <Stack direction="row" justifyContent="space-between">
              <Typography>Tổng cộng:</Typography>
              <Typography>0đ</Typography>
            </Stack>
          </Stack>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Booking;
