import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Item } from "../../models/Item";

const Form = (props: any) => {
  const { setItem } = props;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if(name !== "" && description !== "") setIsDisabled(false);
    else setIsDisabled(true);
}, [name, description]);

  const handleSubmit = () => {
    let item = new Item(name, description);
    setItem(item);
    setName("");
    setDescription("");
  };

  const handleChange = (event: any) => {
    if (event.target.id === "name") {
      setName(event.target.value);
    } else if (event.target.id === "description") {
      setDescription(event.target.value);
    }
  };

  return (
    <Stack direction="row" spacing={2}>
      <TextField
        onChange={handleChange}
        id="name"
        size="small"
        label="Name"
        variant="outlined"
        value={name}
      />
      <TextField
        onChange={handleChange}
        id="description"
        size="small"
        label="Description"
        variant="outlined"
        value={description}
      />
      <Button
        size="small"
        variant="contained"
        onClick={handleSubmit}
        disabled={isDisabled}
      >
        Submit
      </Button>
    </Stack>
  );
};

export default Form;
