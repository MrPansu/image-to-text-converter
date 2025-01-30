import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <h1>Image to Text</h1>
        <h1>Converter</h1>

        <div className="imageBox">
          <input type="file" accept="image/*" />
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
      </div>
    </>
  );
}

export default App;
