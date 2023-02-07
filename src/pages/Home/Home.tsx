import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./Home.css";
import Form from "../../components/Form/Form";
import TableComp from "../../components/TableComp/TableComp";
import { Item } from "../../models/Item";

const Home = () => {
  return (
    <>
      <Form />
      <TableComp />
    </>
  );
};

export default Home;
