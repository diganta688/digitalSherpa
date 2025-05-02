import React from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = React.useState({
    name: "",
    category: "",
    price: "",
    inStock: true,
  });
  const [submitLoading, setSubmitLoading] = React.useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    try {
      const responce = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/products/add`,
        product,
        { withCredentials: true }
      );
      if (responce.status === 200) {
        setSubmitLoading(false);
        toast.success(responce.data.message);
        setProduct({
          name: "",
          category: "",
          price: "",
          inStock: true,
        });
        navigate("/");
      } else {
        setSubmitLoading(false);
        toast.error(responce.data.message);
      }
    } catch (error) {
      setSubmitLoading(false);
      toast.error("Something went wrong");
      console.error(error);
    }
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
        <div
          className=""
          style={{
            border: "2px solid black",
            padding: "5rem",
            borderRadius: "20px",
          }}
        >
          <div className="">
            <Link to="/" style={{ textDecoration: "none" }}>Back to home</Link>
            <h1>Add Product</h1>
          </div>
          <div
            className=""
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "flex-start",
            }}
          >
            <form action="" onSubmit={submit}>
              <div className="">
                <TextField
                  style={{ marginBottom: "20px" }}
                  value={product.name}
                  onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
                  }
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  required
                />
              </div>
              <div className="">
                <TextField
                  style={{ marginBottom: "20px" }}
                  value={product.category}
                  onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                  }
                  id="outlined-basic"
                  label="Category"
                  variant="outlined"
                  required
                />
              </div>
              <div className="">
                <TextField
                  style={{ marginBottom: "20px" }}
                  value={product.price}
                  type="number"
                  onChange={(e) =>
                    setProduct({ ...product, price: e.target.value })
                  }
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                  required
                />
              </div>
              <div className="">
                <Checkbox
                  required
                  id="inStockCheck"
                  value={product.inStock}
                  checked={product.inStock}
                  onChange={(e) =>
                    setProduct({ ...product, inStock: e.target.checked })
                  }
                />

                <label htmlFor="inStockCheck">In Stock</label>
              </div>
              <div className="" style={{ width: "100%" }}>
                <Button variant="outlined" style={{ width: "100%" }} disabled={submitLoading} type="submit">
                  {submitLoading ? "Loading..." : "Add"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
