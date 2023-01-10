import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import React, { Component, useState, createContext } from "react";
const SearchContext = createContext();

function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <SearchContext.Provider value={search}>
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Header setSearch={setSearch} />
              <Home search={search} />
            </Route>
            <Route path="/home">
              <Header setSearch={setSearch} />
              <Home search={search} />
            </Route>
            <Route path="/cart">
              <Header setSearch={setSearch} />
              <Cart />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
