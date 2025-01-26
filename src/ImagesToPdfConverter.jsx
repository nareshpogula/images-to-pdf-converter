import React, { useState } from "react";
import { jsPDF } from "jspdf";

const ImagesToPdfConverter = () => {
  const [images, setImages] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter((file) => file.type.startsWith("image/"));
    const imageObjects = validFiles.map((file, index) => ({
      id: index,
      file,
      url: URL.createObjectURL(file),
    }));
    setImages(imageObjects);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData("index", index);
  };

  const handleDrop = (event, targetIndex) => {
    event.preventDefault();
    const sourceIndex = parseInt(event.dataTransfer.getData("index"), 10);
    const reorderedImages = [...images];
    const [movedImage] = reorderedImages.splice(sourceIndex, 1);
    reorderedImages.splice(targetIndex, 0, movedImage);
    setImages(reorderedImages);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDownloadPdf = async () => {
    if (images.length === 0) {
      alert("Please select at least one image.");
      return;
    }

    const pdf = new jsPDF("portrait", "mm", "a4");
    const pageWidth = 210;
    const pageHeight = 297;

    const processImage = (image, isFirstPage) =>
      new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.src = e.target.result;
          img.onload = () => {
            const imgAspectRatio = img.width / img.height;
            const renderWidth = imgAspectRatio > 1 ? pageHeight * imgAspectRatio : pageWidth;
            const renderHeight = renderWidth / imgAspectRatio;
            const x = (pageWidth - renderWidth) / 2;
            const y = (pageHeight - renderHeight) / 2;

            if (!isFirstPage) pdf.addPage();
            pdf.addImage(img, "JPEG", x, y, renderWidth, renderHeight);
            resolve();
          };
        };
        reader.readAsDataURL(image.file);
      });

    let isFirstPage = true;
    for (const image of images) {
      await processImage(image, isFirstPage);
      isFirstPage = false;
    }
    pdf.save("images.pdf");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Images to PDF Converter</h1>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          style={styles.fileInput}
        />
        <div style={styles.imageGrid}>
          {images.map((image, index) => (
            <div
              key={image.id}
              style={styles.imageCard}
              draggable
              onDragStart={(event) => handleDragStart(event, index)}
              onDragOver={handleDragOver}
              onDrop={(event) => handleDrop(event, index)}
            >
              <img src={image.url} alt={`img-${index}`} style={styles.image} />
              <button
                onClick={() => handleRemoveImage(index)}
                style={styles.removeButton}
              >
                X
              </button>
            </div>
          ))}
        </div>
        <button onClick={handleDownloadPdf} style={styles.downloadButton}>
          Download PDF
        </button>
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
    width: "90%",
    maxWidth: "800px",
  },
  title: {
    fontSize: "28px",
    color: "#333",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  fileInput: {
    margin: "20px 0",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  imageGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
    margin: "20px 0",
  },
  imageCard: {
    width: "120px",
    height: "150px",
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  removeButton: {
    position: "absolute",
    top: "5px",
    right: "5px",
    backgroundColor: "#ff5c5c",
    color: "#fff",
    border: "none",
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  downloadButton: {
    marginTop: "20px",
    padding: "15px 30px",
    fontSize: "18px",
    backgroundColor: "#4CAF50",
    color: "#ffffff",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
  },
};

export default ImagesToPdfConverter;
