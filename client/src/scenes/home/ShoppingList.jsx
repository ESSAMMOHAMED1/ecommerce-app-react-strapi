import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Tab, Tabs, useMediaQuery } from "@mui/material";
import { setItems } from "../../state";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((stat) => stat.cart.items);
  const isNonMobil = useMediaQuery("(min-width:600px)");
  console.log("items", items);
  const handelChange = (event, newValue) => {
    setValue(newValue);
  };
  async function getItmes() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemJson = await items.json();
    dispatch(setItems(itemJson.data));
  }
  useEffect(() => {
    getItmes();
  }, []);

  return(
    <div>Shopping List</div>
  )
};

export default ShoppingList;
