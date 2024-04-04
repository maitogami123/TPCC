import { FunctionComponent } from "react";
import Button from '@mui/material/Button';
interface HomeProps {
  
}
 
const Home: FunctionComponent<HomeProps> = () => {
  return ( 
    <>
      Home page
      <Button variant="contained">Click me</Button>
    </>
   );
}
 
export default Home;