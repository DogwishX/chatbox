import { useEffect } from "react";

import "./App.css";
import Home from "./Pages/Home/Home";

import { Link } from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "PicSkin";
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
