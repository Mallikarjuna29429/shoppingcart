import "./App.css";
import React, { useState, createContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/MainComponents/Cart";
import Home from "./components/MainComponents/Home";
import Header from "./components/MainComponents/Header";
import Login from "./components/MainComponents/Login";

const SearchContext = createContext();

function App() {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={search}>
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Header setSearch={setSearch} />
              <Home search={search} />
            </Route>
            <Route exact path="/login">
              <Header setSearch={setSearch} />
              <Login search={search} />
            </Route>
            <Route path="/home">
              <Header setSearch={setSearch} />
              <Home search={search} />
            </Route>
            <Route path="/cart">
              <Header setSearch={setSearch} />
              <Cart />
            </Route>
            <Route path="/logout">
              <Header setSearch={setSearch} />
              <Login />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
