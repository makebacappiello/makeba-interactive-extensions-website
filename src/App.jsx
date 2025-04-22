import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  // function extensionsList({ items }){
  // return (
  //   <ul>
  //     {extCardata.map(item =>(
  //       <li key={item.id}>{item.name}</li>
  //     ))}
  //   </ul>
  // )
  // }

  //   return (
  //     <>
  //       {extCardata.map((item, key) => {
  return (
    <div>
      {/* id: 2,
    logo: "./assets/images/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true */}

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
