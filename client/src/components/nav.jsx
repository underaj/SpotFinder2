import React from 'react';

export const Nav = (props) => {
//render differnets navbar versions for signed in users and guests
  if (props.user !== "anonymous" && props.user !== null){
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <ul className="nav navbar-nav">
            <li onClick={() => { props.clickNav(3)}}>
              <a>Add a new spot</a>
            </li>
            <li onClick={() => {props.signout()}}>
              <a>Sign out</a>
            </li>
          </ul>
          <p className="navbar-text navbar-right greeting">
            Hey there, {props.user}!
          </p>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <ul className="nav navbar-nav">
            <li onClick={() => { props.clickNav(2)}}>
              <a>Sign In</a>
            </li>
            <li onClick={() => { props.clickNav(1)}}>
              <a>Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

};
