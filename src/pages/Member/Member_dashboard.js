import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Member.css";
import { Member_sidebar } from "./Member_sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Member_dashboard = () => {
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

  const handleShowForm = () => {
    alert("press this button");
  };
  return (
    <>
      <Header />

      <div className="row">
        <Member_sidebar />

        <div className="col col-lg-8 m-5">
          <div className="row m-3">
            <div className="col col-lg-4 text-right">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <form className="d-flex">
                    <input
                      className="form-control me-3"
                      type="search"
                      placeholder="Search Book"
                      aria-label="Search"
                    />
                    <button
                      className="btn btn btn btn-outline-info shadow"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </li>
              </ul>
            </div>

            <div className="col-md-2 offset-md-2"></div>

            <div className="col col-lg-4 text-left">
              <button
                type="button"
                className="btn align-items-left border-0 active"
                onClick={handleShowForm}
              >
                Grid view
              </button>
              <button
                type="button"
                className="btn align-items-left border-0 active"
                onClick={handleShowForm}
              >
                List view
              </button>
              <button
                type="button"
                className="btn btn-info align-items-left active"
                onClick={handleShowForm}
              >
                Add to cart
              </button>
            </div>
          </div>
          <table className="table shadow border rounded">
            <thead className="thead-dark border">
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
                      style={{ width: "50px", height: "75px" }} // Added styling for consistency
                    />
                  </td>
                  <td>{book.bookName}</td>
                  <td>{book.bookGenre}</td>
                  <td>{book.quantity}</td>
                  <td>{book.quantity < 1 ? "Out of Stock" : "In Stock"}</td>
                  <td>
                    <div className="d-inline-flex">
                      <div className="form-group mb-2 ">
                        <div
                          className="btn-group w-30"
                          role="group"
                          aria-label="book quatity"
                        >
                          <button
                            type="button"
                            className="btn btn-info"
                            onClick={() => alert("press quality")}
                          >
                            -
                          </button>
                          <input
                            type="Number"
                            className="form-control quantity-input"
                            min="0"
                          />
                          <button type="button" className="btn btn-info">
                            +
                          </button>
                        </div>
                        <button
                          type="button "
                          className="btn btn-info align-items-right mx-2 active"
                          onClick={handleShowForm}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </td>
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

export default Member_dashboard;
