import React, { Fragment } from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Modal from "./Modal/Modal";
import Placeholder from "./Placeholder/Placeholder";
import SearchResult from "./Search/SearchResult";
import "./App.scss";

function App() {
  return (
    <Fragment>
      <Header />
      {/* <SearchResult /> */}
      <Modal />
      <Content />
      <Contact />
      {/* <Placeholder /> */}
      <Footer />
    </Fragment>
  );
}

export default App;
