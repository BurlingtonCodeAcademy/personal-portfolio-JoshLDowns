// -------- Header Component that triggers most routing -------- //
import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "/",
    };
  }
  //renders each link in the header and switches classes dependant of which page you are for functionality
  render() {
    return (
      <div id="header">
        <div id="nav-links">
          <Link
            to={"/"}
            style={{ textDecoration: "none" }}
            onClick={this.props.handleLink}
          >
            <h1
              id="home-link"
              className={
                this.props.currentPage === "/" ? "selected-link" : "text-link"
              }
            >
              HOME
            </h1>
          </Link>
          <Link
            to={"/about"}
            style={{ textDecoration: "none" }}
            onClick={this.props.handleLink}
          >
            <h1
              id="about-link"
              className={
                this.props.currentPage === "/about"
                  ? "selected-link"
                  : "text-link"
              }
            >
              ABOUT
            </h1>
          </Link>
          <Link
            to={"/code"}
            style={{ textDecoration: "none" }}
            onClick={this.props.handleLink}
          >
            <h1
              id="code-link"
              className={
                this.props.currentPage === "/code"
                  ? "selected-link"
                  : "text-link"
              }
            >
              CODE
            </h1>
          </Link>
          <Link
            to={"/art"}
            style={{ textDecoration: "none" }}
            onClick={this.props.handleLink}
          >
            <h1
              id="art-link"
              className={
                this.props.currentPage === "/art"
                  ? "selected-link"
                  : "text-link"
              }
            >
              ART
            </h1>
          </Link>
          <Link
            to={"/blog"}
            style={{ textDecoration: "none" }}
            onClick={this.props.handleLink}
          >
            <h1
              id="blog-link"
              className={
                this.props.currentPage === "/blog"
                  ? "selected-link"
                  : "text-link"
              }
            >
              BLOG
            </h1>
          </Link>
        </div>
        <div id="contact">
          <Link
            to={"/contact"}
            style={{ textDecoration: "none" }}
            onClick={this.props.handleLink}
          >
            <h1
              id="contact-link"
              className={
                this.props.currentPage === "/contact"
                  ? "selected-link"
                  : "text-link"
              }
            >
              CONTACT
            </h1>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
