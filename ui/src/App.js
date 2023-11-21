import React from "react";
import Home from "./components/home/home";
import Page1 from "./components/page1/page1";
import Page2 from "./components/page2/page2";
import Page3 from "./components/page3/page3";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Box from "./components/box/box";

function App() {
  const All = ()=>{
    return (<>
     <Home />
      <Page1 />
      <Page2 />
      <Page3 /> 
    </>)
  }
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<All />} />
        <Route path="/box" element={<Box />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
