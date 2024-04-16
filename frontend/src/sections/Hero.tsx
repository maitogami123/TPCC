import { Box, Typography } from "@mui/material";

interface HeroProps {
  backgorundImg?: string;
  children?: React.ReactNode;
}

function Hero(props: HeroProps) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "::before": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%)",
          zIndex: -10,
        },
      }}
    >
      <img
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: -12,
        }}
        src={props.backgorundImg || "/assets/img/hero-img-1.png"}
        alt=""
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
          textAlign: "center"
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default Hero;
