import { useState } from "react";
import "./App.css";

function App() {
  const [image, setimage] = useState([]);
  console.log("images", image);

  const handlesubmit = (files) => {
    setimage(files);
  };
  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          handlesubmit(event.target.files);
        }}
      />
    </div>
  );
}

export default App;
