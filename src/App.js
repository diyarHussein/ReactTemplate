import React, { Component } from "react";
import {BrowserRouter ,Route , Routes} from "react-router-dom";
import Contact from "./Componenets/Contact";
import Navbar from "./Componenets/Navbar";
import Index from "./Componenets/Index";

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path= "/" element={<Index/>} />
          <Route path= "/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
     
    );
  }
 
}

export default App;
