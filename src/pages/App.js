import "./App.css";
import Card from "../components/Card";
import Stack from "@mui/material/Stack";
import Temp from "../assets/temp.png";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Chart from "../components/Chart";
import Sun from "../assets/sun.png";
import Rain from "../assets/rain.png";

function App() {
  // const weatherimg = [
  //   {
  //     title: "sun",
  //     image: Sun,
  //   },
  //   {
  //     title: "rain",
  //     image: Rain,
  //   },
  // ];
  return (
    <div className="App">
      <Container maxWidth="xl">
        <header className="App-header">
          <Grid container direction="row" spacing={2}>
            <Grid item xs={4}>
              <Stack direction="column" spacing={2}>
                <Card img={Sun} msg="28°c"></Card>
                <Card img={Rain} msg="50%"></Card>
              </Stack>
            </Grid>
            <Grid item xs={8}>
              {/* <img src={Temp}></img> */}
              <Chart></Chart>
            </Grid>
          </Grid>
        </header>
      </Container>
    </div>
  );
}

export default App;
