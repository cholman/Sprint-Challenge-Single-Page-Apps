import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage"
import { Route } from 'react-router-dom';
import Characters from './components/Characters';
import SearchForm from './components/SearchForm';



export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/components/WelcomePage"><WelcomePage /></Route>
      <Route exact path="/components/Characters"><Characters /></Route>
    </main>
  );
}
