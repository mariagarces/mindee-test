import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Form.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Item } from "../../models/Item";

const Form = (props: any) => {
  return (
    <Stack direction="row" spacing={2}>
      <TextField
        id="name"
        size="small"
        label="Name"
        variant="outlined"
      />
      <TextField
        id="description"
        size="small"
        label="Description"
        variant="outlined"
      />
      <Button
        size="small"
        variant="contained"
      >
        Submit
      </Button>
    </Stack>
  );
};

export default Form;
