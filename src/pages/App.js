import "./App.css";
import Card from "../components/Card";
import Stack from "@mui/material/Stack";
import Temp from "../assets/temp.png";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Chart from "../components/Chart";
function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <header className="App-header">
          <Grid container direction="row" spacing={2}>
            <Grid item xs={4}>
              <Stack direction="column" spacing={2}>
                <Card></Card>
                <Card></Card>
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
