import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome to PDF Tools</h1>
        <p style={styles.subtitle}>
          Your go-to solution for converting images to PDF quickly and easily.
        </p>
        <Link to="/pdf" style={styles.link}>
          <button style={styles.button}>Go to Images to PDF Converter</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #f3f4f6, #d9e2ec)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    width: "80%",
    maxWidth: "500px",
  },
  title: {
    fontSize: "36px",
    color: "#333",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "30px",
    color: "#666",
  },
  link: {
    textDecoration: "none",
  },
  button: {
    padding: "15px 30px",
    fontSize: "18px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "transform 0.3s, background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#45a049",
  },
  buttonFocus: {
    outline: "none",
    transform: "scale(1.05)",
  },
};

export default HomePage;
