import React from "react";
import ImagesToPdfConverter from "./ImagesToPdfConverter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./Layout";
import AboutUs from "./AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pdf" element={<ImagesToPdfConverter />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
