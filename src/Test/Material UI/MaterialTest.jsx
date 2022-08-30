import React, { useState } from "react";
// import { Typography } from "@mui/material";
// import { Button } from "@mui/material";
import { TextField } from "@mui/material";
export const MaterialTest = () => {
  const [data, setdata] = useState(" ");
  return (
    <div>
      {/* =========>>>>(((TextField)))<<<<============= */}
      <TextField
        variant="outlined"
        label=" Enter name"
        placeholder="Pathan Tabish"
        type={"text"}
        sx={{ margin: 3 }}
        onChange={(e) => setdata(e.target.value)}
        // value={data}
      />
      <TextField
        sx={{ margin: 3 }}
        variant="standard"
        label=" Email"
        type={"email"}
        placeholder="abc@gmail.com"
      />
      <TextField
        sx={{ margin: 3 }}
        variant="filled"
        label=" Moblie no"
        type={"number"}
        placeholder="9370220603"
      />
      <TextField
        sx={{ margin: 3 }}
        variant="filled"
        label=" Password"
        type={"password"}
        placeholder="Abc@123"
      />
      <p>{data}</p>

      {/* =========>>>>(((BUTTON)))<<<<============= */}

      {/* <Button
        onClick={() => {
          alert("Hi Tabish!");
        }}
        sx={{
          margin: 3,
          color: "orange",
          bgcolor: "aqua",
          "&:hover": {
            backgroundColor: "black",
            color: "yellow",
          },
        }}
        size="large"
        variant="contained"
      >
        Click me
      </Button>
      <Button
        onClick={() => {
          alert("bye!");
        }}
        sx={{
          margin: 3,
          color: "info",
          //   "&:hover": {
          //     backgroundColor: "orange",
          //     color: "black",
          //   },
        }}
      >
        Info
      </Button>
      <Button
        onClick={() => {
          alert(" How Are You?");
        }}
        sx={{
          color: "bisque",
          bgcolor: "green",
          "&:hover": {
            backgroundColor: "red",
            color: "yellow",
          },
          margin: 3,
        }}
        size="small"
        variant="text"
      >
        Click me
      </Button>
      <Button
        onClick={() => {
          alert("Whats going on ??");
        }}
        sx={{
          margin: 3,
          color: "cadetblue",
          bgcolor: "pink",
          "&:hover": {
            backgroundColor: "blue",
            color: "yellow",
          },
        }}
        size="medium"
        variant="outlined"
      >
        Click me
      </Button> */}
      {/* =================================((((TYPOGRAPHY))))===================>> */}
      {/* <Typography
        className="Typo"
        variant="h1"
        sx={{
          marginTop: "10rem",

          "&:hover": {
            backgroundColor: "green",
            color: "yellow",
          },

          marginLeft: "30vw",
        }}
      >
        Hello world
      </Typography> */}
      {/* <<<=============((((**THE END))))===============<<< */}
    </div>
  );
};

export default MaterialTest;
