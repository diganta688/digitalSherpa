import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Checkbox from "@mui/material/Checkbox";
import {Link} from "react-router-dom";

export default function DisplayProduct() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showInStock, setShowInStock] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products/all`, {
          withCredentials: true,
        });
        if (res.status === 200) {
          setProducts(res.data);
          setFilteredProducts(res.data);
          setLoading(false);
        } else {
          setLoading(false);
          toast.error("Error fetching products");
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
        toast.error("Error fetching products");
      }
    };
    fetchProducts();
  }, []);

  const handleFilterChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    applyFilters(category, showInStock);
  };

  const handleCheckboxChange = (event) => {
    const inStock = event.target.checked;
    setShowInStock(inStock);
    applyFilters(selectedCategory, inStock);
  };

  const applyFilters = (category, inStock) => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (inStock) {
      filtered = filtered.filter((product) => product.inStock === true);
    }

    setFilteredProducts(filtered);
  };

  return (
    <>
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="">
          <h1>All Products</h1>
        </div>
        <div style={{ marginBottom: "20px", display: "flex", gap: "20px", alignItems: "center" }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedCategory}
            onChange={handleFilterChange}
            displayEmpty
            style={{ width: "200px" }}
          >
            <MenuItem value="">
              <em>All Categories</em>
            </MenuItem>
            {[...new Set(products.map((product) => product.category))].map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              checked={showInStock}
              onChange={handleCheckboxChange}
              inputProps={{ "aria-label": "Show in-stock items" }}
            />
            <p>Display in-stock items</p>
          </div>
          <Link to="/add" style={{ textDecoration: "none" }}>Add new Product</Link>
        </div>
        <div
          className=""
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {loading ? (
            <Typography variant="h6">Loading...</Typography>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Card
                key={product._id}
                sx={{
                  minWidth: 275,
                  margin: "10px",
                  backgroundColor: "#f5f5f5",
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {product.category}
                  </Typography>
                  <Typography variant="body2">{product.price}</Typography>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant="h6">No products found</Typography>
          )}
        </div>
      </div>
    </>
  );
}