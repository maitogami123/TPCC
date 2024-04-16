import { Container, Grid, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import MovieCard from "../../components/MovieCard";
import ResponsiveAppBar from "../../layouts/AppBar";
import Hero from "../../sections/Hero";
interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Hero>
        <Typography variant="h1" component="h2" sx={{ color: "#fff" }}>
          TPC Cinema
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: "#fff" }}>
          Trân trọng từng phút giây của bạn
        </Typography>
      </Hero>
      <Container>
        <Grid container spacing={4} paddingTop={4} paddingBottom={4}>
          <MovieCard
            title="The Shawshank Redemption"
            description="Two imprisoned men bond over a shared love of literature."
            imgUrl="https://i.imgur.com/eNjgiqB.jpeg"
          />
          <MovieCard
            title="The Shawshank Redemption"
            description="Two imprisoned men bond over a shared love of literature."
            imgUrl="https://i.imgur.com/eNjgiqB.jpeg"
          />
          <MovieCard
            title="The Shawshank Redemption"
            description="Two imprisoned men bond over a shared love of literature."
            imgUrl="https://i.imgur.com/eNjgiqB.jpeg"
          />
          <MovieCard
            title="The Shawshank Redemption"
            description="Two imprisoned men bond over a shared love of literature."
            imgUrl="https://i.imgur.com/eNjgiqB.jpeg"
          />
          <MovieCard
            title="The Shawshank Redemption"
            description="Two imprisoned men bond over a shared love of literature."
            imgUrl="https://i.imgur.com/eNjgiqB.jpeg"
          />
          <MovieCard
            title="The Shawshank Redemption"
            description="Two imprisoned men bond over a shared love of literature."
            imgUrl="https://i.imgur.com/eNjgiqB.jpeg"
          />
          <MovieCard
            title="The Shawshank Redemption"
            description="Two imprisoned men bond over a shared love of literature."
            imgUrl="https://i.imgur.com/eNjgiqB.jpeg"
          />
          <MovieCard
            title="The Shawshank Redemption"
            description="Two imprisoned men bond over a shared love of literature."
            imgUrl="https://i.imgur.com/eNjgiqB.jpeg"
          />
        </Grid>
      </Container>
    </>
  );
};

export default Home;
