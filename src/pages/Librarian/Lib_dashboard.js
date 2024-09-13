import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import "./lib.css";
import LibSideNav from "./LibSideNav";

const Lib_dashboard = () => {
  const bookData = [
    {
      bookName: "The Lost BookShop",
      bookGenre: "fantasy",
      file: "/assets/images/lostbookshop.png",
      quantity: 10,
    },
    {
      bookName: "Lost child",
      bookGenre: "horror",
      file: "/assets/images/horror.jpg",
      quantity: 0,
    },
    {
      bookName: "The Lost BookShop",
      bookGenre: "horror",
      file: "/assets/images/lostbookshop.png",
      quantity: 10,
    },
    {
      bookName: "Moon",
      bookGenre: "sci fi",
      file: "/assets/images/sifi.png",
      quantity: 1000,
    },
  ];
  return (
    <>
      <Header />
      <div className="row">
        <LibSideNav />
        <div className="col col-lg-8 m-5">
          <table class="table shadow border rounded">
            <thead class="thead-dark">
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Book cover</th>
                <th scope="col">Book Name</th>
                <th scope="col">Book Genre</th>
                <th scope="col">Quatity</th>
                <th scope="col">Stock</th>
              </tr>
            </thead>

            <tbody>
              {bookData.map((book, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img
                      src={book.file}
                      alt="book thumbnail"
                      className="bthumbnail"
                      style={{ width: "50px", height: "50px" }} // Added styling for consistency
                    />
                  </td>
                  <td>{book.bookName}</td>
                  <td>{book.bookGenre}</td>
                  <td>{book.quantity}</td>
                  <td>{book.quantity < 1 ? "Out of Stock" : "In Stock"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Lib_dashboard;
