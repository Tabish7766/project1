import React from "react";
import { Button, Grid, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
export const Top = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              {/* <Link to="/todo">
                <Button variant="contained">Todo</Button>
              </Link>
              <Link to="/counter">
                <Button variant="contained">Counter</Button>
              </Link> */}
              {/* <Button variant="contained">Counter</Button> */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
