import React from "react";
import Tesseract from "tesseract.js";
import { FaRegCopy } from "react-icons/fa";
import "./App.css";

function App() {
  const [image, setImage] = React.useState(null);
  const [text, setText] = React.useState(null);

  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    setImage(image);
    if (!image) return;
    Tesseract.recognize(image, "eng", {
      logger: (m) => {
        if (m.status === "recognizing text") {
          setText(m.status);
          console.info(m);
        }
      },
    }).then(({ data: { text } }) => {
      setText(text);
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const handleRestart = () => {
    setImage(null);
    setText("");
  };

  return (
    <>
      <div className="container">
        <h1>Image to Text</h1>
        <h1>Converter</h1>

        <div className="imageBox">
          {image ? (
            <img src={URL.createObjectURL(image)} alt="Uploaded" />
          ) : (
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          )}
        </div>

        <div className="results">
          <div className="resultsBox">
            <div className="resultsText">
              {text ? <p>{text}</p> : <p>Extracted text will appear here</p>}
            </div>
          </div>
          {text && text !== "recognizing text" && (
            <button onClick={handleCopy}>
              <FaRegCopy />
            </button>
          )}
        </div>

        <div>
          <button onClick={handleRestart}>Restart</button>
        </div>
      </div>
    </>
  );
}

export default App;
