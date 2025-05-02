import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import DisplayProduct from "./components/DisplayProduct";
import NotFound from "./components/NotFound";
import { ToastContainer, Slide } from "react-toastify";

function App() {
  return (
    <Router>

<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Slide}
/>
      <Routes>
        <Route path="/" element={<DisplayProduct />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
