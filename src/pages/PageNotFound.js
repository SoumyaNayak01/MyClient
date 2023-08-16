import React from "react";
import {Link} from "react-router-dom";
function PageNotFound() {
  return (
    <div>
      <h1>Page Not Found -_-</h1>
      <h3>Return to Home Page: <Link to="/">Home Page</Link></h3>
    </div>
  );
}

export default PageNotFound;
