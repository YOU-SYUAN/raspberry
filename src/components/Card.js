import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Sun from "../assets/sun.png";
import Rain from "../assets/rain.png";
import { Grid } from "@mui/material";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  return (
    <Card sx={{ display: "flex", p: 5, m: 10 }}>
      <CardContent sx={{ width: "100%" }}>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={6}>
            <Grid
              item
              md={3}
              style={{ width: "100%", height: "100%" }}
              fontSize={"min(20vw, 5rem)"}
            >
              {props.msg}
            </Grid>
          </Grid>
          {/* <Typography fontSize={80} align="center" xs={6}>
            {props.msg}
          </Typography> */}
          <Grid item xs={6} sx={{ textAlign: "right" }}>
            <img
              src={props.img}
              style={{ maxHeight: "100px", maxWidth: "100%" }}
            ></img>
          </Grid>
        </Grid>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
