import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import { FunctionComponent } from "react";

interface MovieCardProps {
  imgUrl: string;
  title: string;
  description: string;
}

const MovieCard: FunctionComponent<MovieCardProps> = (props) => {
  return (
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={props.imgUrl}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small">Book now!</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MovieCard;
