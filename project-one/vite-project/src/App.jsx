import { useState } from "react";

import "./App.css";

//////  #Note: Passing this prop everywhere due to some error given by some package. So destructuring inside it, and even not using props as it read for props.

export function Navbar(prop) {
  let { brand, currPage, setPage } = prop;

  function onHomeClick() {
    setPage("home");
  }

  function onAboutClick() {
    setPage("About");
  }

  // function darkThemeToggle() {
  //   setTheme(!dark);
  // }

  //!Either active page would be home page or about page. --> Assumption
  //Also, haven't incorporate the use of about button component
  //TODO: Have to incorporate the context for them. Currently using state for it.

  //Find a method to specify the default properties
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {brand}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className={currPage === "home" ? "nav-link active" : "nav-link"}
                aria-current="page"
                href="#"
                onClick={onHomeClick}
              >
                Home
              </a>
              <a
                className={currPage === "home" ? "nav-link active" : "nav-link"}
                href="#"
                onClick={onAboutClick}
              >
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export function Jumbotron(prop) {
  let { heading, text, link } = prop;

  return (
    <div className="jumbotron">
      <div className="container">
        <h1>{heading}</h1>
        <p>{text}</p>
        <p>
          <a className="btn btn-primary btn-lg" href={link} role="button">
            Learn more &raquo;
          </a>
        </p>
      </div>
    </div>
  );
}

export function PageAbout() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="page-header">About Page</h2>
          <p>Page Content...</p>
        </div>
      </div>
    </div>
  );
}

export function PageHome() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="page-header">Home Page</h2>
          <p>Page Content...</p>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  const websiteName = "Website Name";
  const year = "2016";
  return (
    <div className="container">
      <hr />
      <footer className="text-center">
        <p>
          &copy; {websiteName} {year}.
        </p>
      </footer>
    </div>
  );
}

export default function App() {
  const [currPage, setPage] = useState("home"); //!Set page will simply set value supplied to it as new page

  const jumbotron_heading = "Welcome!";
  const jumbotron_text =
    "Welcome to our website that is built with the ReactJS components and project created with Vite.";
  const jumbotron_link = "http://google.com";

  let page = currPage === "home" ? <PageHome /> : <PageAbout />;
  return (
    <>
      <Navbar barnd="Learn React" currPage={currPage} setPage={setPage} />
      {currPage === "home" && (
        <Jumbotron
          heading={jumbotron_heading}
          text={jumbotron_text}
          link={jumbotron_link}
        />
      )}
      {page}
      <Footer />
    </>
  );
}
