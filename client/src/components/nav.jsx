import React from 'react';

export const Nav = (props) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
      <span className="navbar-brand" onClick={() => { props.clickNav(2)}}>SignIn
      </span>
      <span className="navbar-brand" onClick={() => { props.clickNav(1)}}>SignUp
      </span>
      <span className="navbar-brand" onClick={() => { props.clickNav(3)}}>Add a new spot
      </span>
      </div>
    </div>
  </nav>
);
