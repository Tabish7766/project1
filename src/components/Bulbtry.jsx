import React, { useState } from "react";
import { Button } from "@mui/material";

export const Bulbtry = () => {
  const [data, setData] = useState(false);
  return (
    <div>
      <h1>Magic</h1>
      <div>
        <Button
          variant="contained"
          color={data ? success : error}
          onClick={() => setData(!data)}
        >
          Click to see magic
        </Button>
      </div>
    </div>
  );
};
