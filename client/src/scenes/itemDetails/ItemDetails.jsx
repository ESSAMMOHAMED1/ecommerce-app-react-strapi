import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, Button, Taps, Tap } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useParams } from "react-router-dom";
import Item from "../../components/Item";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  const handelChange = (event, newValue) => {
    setValue(newValue);
  };
  async function getItem() {
    const item = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=imge`,
      { method: "GET" }
    );
    const itemJson = await item.json();
    setItem(itemJson.data);
  }

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    setItems(itemsJson.data);
  }
  useEffect(() => {
    getItem();
    getItems();
  }, [item]);

  return (
    <Box width="80%" m="80px auto">
      <Box flexWrap="wrap" columnGap="40px">
        {/* IMAGES */}
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={item?.name}
            width="100%"
            height="100%"
            src={`http://localhost1337${item?.attributes?.images?.data?.attributes?.formats?.medium?.url}`}
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetails;
