import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Grid } from "@mui/material";

export const ApiFetch = () => {
  const [data, setData] = useState([]);
  const GetApi = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    console.log(result.data);
    setData(result.data);
  };

  useEffect(() => {
    GetApi();
  });

  return (
    <React.Fragment>
      <h1>API Fetching</h1>
      <Grid container spacing={3}>
        {data.map((item) => {
          return (
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <img src={item.image} height={200} />
                  <h3>{item.title}</h3>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};
