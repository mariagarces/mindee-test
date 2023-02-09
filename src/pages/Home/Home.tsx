import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Form from "../../components/Form/Form";
import TableComp from "../../components/TableComp/TableComp";
import { Item } from "../../models/Item";

const Home = () => {
  const [items, setItems] = useState<Item[]>([]);
  const setItem = (item: Item) => {
    setItems((prevItems: Item[]) => [...prevItems, item]);
  };

  const getItems = () => {
    return items;
  };

  const deleteItem = (itemIndex: number) => {
    let copyItems = [...items];
    copyItems = copyItems.filter((item, index) => itemIndex !== index);
    setItems(copyItems);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: 5,
        m: 5,
        textAlign: 'left',
      }}
    >
      <Typography variant="h3">
        Items management App
      </Typography>
      <Form setItem={setItem} />
      <TableComp getItems={getItems} deleteItem={deleteItem} />
    </Box>
  );
};

export default Home;
