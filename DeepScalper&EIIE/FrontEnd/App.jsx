/*import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/domains" element={<Domains />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App*/

import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Dashboard from './components/Dashboard';
import Orders from './components/Orders';
import Holdings from './components/Holdings';
import Positions from './components/Positions';
import Bids from './components/Bids';
import Funds from './components/Funds';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/bids" element={<Bids />} />
          <Route path="/funds" element={<Funds />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;