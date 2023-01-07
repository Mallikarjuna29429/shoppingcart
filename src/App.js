import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import React, { Component, useState, createContext } from "react";
const SearchContext = createContext();
//added comments
function App() {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={search}>
      <div className="app">
        <Header setSearch={setSearch} />
        <Routes>
          <Route exact path="/" element={<Home search={search} />} />
          <Route path="/cart" element={<Cart search={search} />} />
        </Routes>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
