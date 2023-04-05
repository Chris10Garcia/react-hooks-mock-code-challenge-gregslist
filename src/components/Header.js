import React from "react";
import Search from "./Search";

function Header({searchListing}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchListing={searchListing}/>
    </header>
  );
}

export default Header;
