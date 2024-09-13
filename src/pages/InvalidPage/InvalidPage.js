import React from "react";
import "./InvalidPage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const InvalidPage = () => {
  return (
    <>
      <Header />
      <div className="error d-flex flex-column m-5 p-5">
        404 error <div className="h1 error">Page not found...............</div>
      </div>
      <Footer />
    </>
  );
};

export default InvalidPage;
