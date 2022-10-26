import { Button, FormControl, InputLabel, Paper, Select } from "@mui/material";
import React, { useState } from "react";
import { RegistrationWrapper } from "../CSS/Registration.styled";
import backImg from "../Static/landing.jpg";
import back from "../Static/back.png";
import Background from "./Background";
import Nav from "./Nav";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import dots from "../Static/dots.jpg";
import landing from "../Static/landing1.jpg";
import { borderBottom, color } from "@mui/system";
import { Events } from "../Static/Events";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";

const Registration = () => {
  const [data, setData] = useState({
    name: "",
    mobile: "",
    email: "",
    events: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => {
      console.log(prev);
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const onSubmit = () => {
    setData(data);
  };
  const style = {
    "& label.Mui-focused": {
      color: "#bdbdbd",
      outline: "#fff",
    },
    "&.MuiTextField-root": {
      color: "#e7e7e7",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#fff",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#fff",
    },
    "&.MuiTextField-root:hover ..MuiInput-underline": {
      borderBottomColor: "#fff",
    },
    "& label": {
      color: "#d3d2d2",
    },
    input: {
      color: "#fafafa",
      letterSpacing:"1px",
    },
  };
  return (
    <>
      <RegistrationWrapper backImg={landing} back={back} dots={dots}>
        <Nav first={"Home"} main={"Registration"} third={"Events"} />

        <Background />
        <form action="">
          <div className="paperDiv">
            <Paper elevation={1} className="paper">
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AccountCircle sx={{ color: "#fff", mr: 1, my: 0.5 }} />
                <TextField
                  color="secondary"
                  sx={style}
                  id="input-name"
                  label="Name"
                  variant="standard"
                  required
                  onChange={handleChange}
                  value={data.name}
                  name="name"
                  autoComplete="off"
                  // sx={{borderBottom :"1px solid #fff"}}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AccountCircle sx={{ color: "#fff", mr: 1, my: 0.5 }} />
                <TextField
                  sx={style}
                  id="input-mobile"
                  label="Mobile No."
                  variant="standard"
                  required
                  value={data.mobile}
                  name="mobile"
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AccountCircle sx={{ color: "#fff", mr: 1, my: 0.5 }} />
                <TextField
                  sx={style}
                  id="input-email"
                  label="Email id"
                  variant="standard"
                  required
                  value={data.email}
                  name="email"
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AddShoppingCartRoundedIcon
                  sx={{ color: "#fff", mr: 1, my: 0.5 }}
                />
                <FormControl fullWidth variant="standard">
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{
                      color: "#bdbdbd",
                      "&.Mui-focused": {
                        color: "#bdbdbd"
                      }
                    }}
                  >
                    Select events
                  </InputLabel>
                  {/* <AccountCircle sx={{ color: "#fff", mr: 1, mt: -2.2 }} /> */}
                  <Select
                    required
                    sx={{
                      color: "#fff",
                      width: "250px",
                      ":after": { borderBottomColor: "#fff" },
                      ":before": { borderBottomColor: "#fff" },
                    }}
                    multiple={true}
                    variant="standard"
                    label="Select a domain"
                    value={data.events}
                    name="events"
                    onChange={handleChange}
                  >
                    {Events.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Button
                variant="outlined"
                className="submitBtn"
                onClick={onSubmit}
              >
                Submit
              </Button>
            </Paper>
          </div>
        </form>
      </RegistrationWrapper>
    </>
  );
};

export default Registration;
