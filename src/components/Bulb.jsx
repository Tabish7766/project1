import React, { useState } from "react";
import { Button } from "@mui/material";

export const Bulb = () => {
  const [data, setdata] = useState("false");
  return (
    <div className="sub">
      <h1>My Bulb here</h1>
      <div className={data ? "bulboff" : "bulbon"}>
        <Button
          variant="contained"
          className="btn"
          color={data ? "success" : "error"}
          onClick={() => setdata(!data)}
        >
          {data ? "On" : "Off"}
        </Button>
      </div>
    </div>
  );
};
