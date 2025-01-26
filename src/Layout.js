// Layout.js
import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div style={styles.container}>
      {/* Enhanced Banner */}
      <div style={styles.banner}>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
          <Link to="/pdf" style={styles.navLink}>
            Images to PDF
          </Link>
          <Link to="/about" style={styles.navLink}>
            About Us
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div style={styles.content}>{children}</div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  banner: {
    background: "linear-gradient(90deg, #4CAF50, #2196F3, #FF5722)",
    color: "white",
    padding: "20px",
    textAlign: "center",
    borderBottom: "4px solid #FFC107",
  },
  navLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "8px 15px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "5px",
    transition: "background-color 0.3s, transform 0.2s",
  },
  navLinkHover: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    transform: "scale(1.05)",
  },
  content: {
    flex: "1",
    padding: "20px",
  },
};

export default Layout;
