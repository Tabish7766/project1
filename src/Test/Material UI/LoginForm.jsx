import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Checkbox,
  Radio,
  RadioGroup,
  FormLabel,
  FormGroup,
  FormControlLabel,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";

export const LoginForm = () => {
  const [inputs, setInputs] = useState({
    Name: " ",
    Email: "",
    Password: "",
    Number: "",
    Subscribe: false,
    age: 0,
    Gender: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <TextField
          name="Name"
          value={inputs.Name}
          sx={{ margin: 3 }}
          onChange={handleChange}
          variant="outlined"
          placeholder="PAthan"
          label="Name"
          type={"text"}
        />
        <TextField
          name="Email"
          value={inputs.Email}
          sx={{ margin: 3 }}
          variant="standard"
          placeholder="abc@gmail.com"
          label="Email"
          type={"email"}
          onChange={handleChange}
        />
        <TextField
          name="Number"
          value={inputs.Number}
          sx={{ margin: 3 }}
          variant="filled"
          placeholder="1234567890"
          label="Number"
          type={"number"}
          onChange={handleChange}
        />
        <TextField
          name="Password"
          value={inputs.Password}
          sx={{ margin: 3 }}
          variant="filled"
          placeholder="Abc@123"
          label="Password"
          type={"password"}
          onChange={handleChange}
        />

        <FormControl fullWidth>
          <InputLabel>Age</InputLabel>
          <Select
            name="age"
            value={inputs.age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            defaultValue="female"
            name="Gender"
            onChange={handleChange }
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() =>
                  setInputs((prev) => ({
                    ...prev,
                    Subscribe: !inputs.Subscribe,
                  }))
                }
              />
            }
            label="Subscriber"
          />
        </FormGroup>

        <Button type="submit"> Submit</Button>
      </form>
    </div>
  );
};
export default LoginForm;
