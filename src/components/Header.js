import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    <div>
      <div className="App">
        <div>
          <Link to ="/components/WelcomePage">Home</Link>
        </div>
        <div>
          <Link to ="/components/Characters">Characters</Link>
        </div>
      </div>
    </div>
    </header>
  );
}
