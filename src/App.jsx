import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Homescreen";
import Navbar from "./Pages/Home/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
