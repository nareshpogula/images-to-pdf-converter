import React from "react";

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.text}>
        Welcome to PDF Tools. We aim to provide simple and effective tools
        for converting images to PDF, making your document creation
        experience seamless.
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "32px",
    color: "#333",
  },
  text: {
    fontSize: "18px",
    color: "#666",
    margin: "20px",
  },
};

export default AboutUs;
