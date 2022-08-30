import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardContent, Card, Grid, Button, TextField } from "@mui/material";
export const ProductsApi = () => {
  const [data, setData] = useState([]);
  const GetApi = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    console.log(result.data);
    setData(result.data);
  };

  useEffect(() => {
    GetApi();
  }, []);

  return (
    <>
      {/* <h1>Products Api Fetching</h1> */}
      <Grid container spacing={3}>
        {data.map((item) => {
          return (
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <img src={item.image} className="ProductImg" />
                  <h1 className="ProductHead">{item.title}</h1>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
