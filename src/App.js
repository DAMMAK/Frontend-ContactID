import React, { Fragment, useState } from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Modal from "./Modal/Modal";
import Placeholder from "./Placeholder/Placeholder";
import SearchResult from "./Search/SearchResult";
import Main from './Main/Main';
import "./App.scss";

function App() {
  const [state, setstate] = useState([]);
  var content = state.length > 0 ? <SearchResult /> : <Main />
  return (
    <Fragment>
      <Header />
      {/* <Modal /> */}
      { content }
      {/* <Placeholder /> */}
      <Footer />
    </Fragment>
  );
}

export default App;
