import React, { useState, useEffect } from "react";
import { TextField, Card, CardContent, Button, Grid } from "@mui/material";

export const TestTodo = () => {
  const [data, setData] = useState([]);
  const [datacopy, setDataCopy] = useState([]);
  const [search, setsearch] = useState("");
  const [text, setText] = useState("");
  const handleAdd = () => {
    setData([...data, text]);
    setDataCopy([...datacopy, text]);
  };

  useEffect(
    (elem) => {
      const result = datacopy.filter((elem) =>
        elem.toUpperCase().includes(search.toUpperCase())
      );
      setData(result);
    },
    [search]
  );

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Search...."
                fullWidth
                onChange={(e) => setsearch(e.target.value)}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                onChange={(e) => setText(e.target.value)}
                variant="filled"
                label="Add Todos"
                fullWidth
              />
            </Grid>
            {/* <h1> {data}</h1> */}
            <Grid item xs={4}>
              <Button
                onClick={handleAdd}
                variant="contained"
                color="success"
                fullWidth
              >
                Add
              </Button>
            </Grid>

            {data.map((item) => {
              return (
                <Card>
                  <CardContent>
                    <Grid item xs={4}>
                      <b>{item}</b>
                    </Grid>
                  </CardContent>
                </Card>
              );
            })}
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
