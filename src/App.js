import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Pricing from "./routes/Pricin";
import FAQ from "./routes/FAQ";
import Contact from "./routes/Contact";

function App() {
  return (
    <> 
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/FAQ' element={<FAQ/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
