import React from "react";
import "./App.css";

function App() {
  const [image, setImage] = React.useState(null);

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setImage(image);
  };

  const handleRestart = () => {
    setImage(null);
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
            <input type="file" accept="image/*" onChange={handleImageChange} />
          )}
        </div>

        <div className="results">
          <div className="resultsBox">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              rerum, facilis perspiciatis nisi quas veniam, alias iusto unde
              totam repellendus modi tenetur repellat, qui saepe quod omnis
              laborum ea magni!
            </p>
          </div>
          <p>copy</p>
        </div>
        <div>
          <button onClick={handleRestart}>Restart</button>
        </div>
      </div>
    </>
  );
}

export default App;
