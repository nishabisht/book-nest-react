import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LibSideNav from "./LibSideNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import "./lib.css";

const Inventory = () => {
  const [bookName, setBookName] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [file, setFile] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState({});

  //form validation & adding new book data
  const validateForm = () => {
    const newError = {};

    if (!bookName) {
      newError.bookName = "Book name is required.";
    }
    if (!bookGenre) newError.bookGenre = "Book Genre is required";
    if (!file) newError.file = "Book thumnail need to be added";
    if (!quantity || quantity < 0)
      newError.quantity = "Quality should be greater";
    return newError;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);

      return;
    }

    const newBook = {
      bookName,
      bookGenre,
      file: URL.createObjectURL(file),
      quantity,
    };

    setBookData([...bookData, newBook]);
    console.log({ bookName, bookGenre, file, quantity });

    setBookName("");
    setBookGenre("");
    setFile(null);
    setQuantity(0);
    setError({});
  };

  //managing visiblity of form
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleHideForm = () => {
    setIsFormVisible(false);
  };

  const handleShowForm = () => {
    setIsFormVisible(true);
  };

  const [bookData, setBookData] = useState([]);

  const handlequantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  return (
    <>
      <Header />

      <div
        className="container-fluid bg-primary-subtle"
        style={{ height: "70vh" }}
      >
        <div className="row">
          <LibSideNav />

          <div className="col col-lg-9 m-5 ">
            <div className="d-flex gap-5">
              <button
                type="button"
                className="btn btn-primary align-items-right active"
                onClick={handleShowForm}
              >
                Add
              </button>
              <button type="button" className="btn btn-info disabled">
                Edit
              </button>
              <button type="button" className="btn btn-danger disabled">
                Delete
              </button>
            </div>

            {isFormVisible && (
              <div className="row my-3" id="add-book">
                <div className="col bg-white rounded shadow px-5">
                  <h3 className="text-center py-2">New Book</h3>
                  <form className="form-inline" onSubmit={handleSubmit}>
                    <div className="form-group mb-2 mr-sm-2">
                      <label className="sr-only" htmlFor="inlineFormInputName2">
                        Book Name
                      </label>
                      <input
                        type="text"
                        className="form-control mb-3"
                        id="inlineFormInputName2"
                        placeholder="Book name"
                        value={bookName}
                        onChange={(e) => setBookName(e.target.value)}
                      />
                      {error.bookName && (
                        <div className="text-danger">{error.bookName}</div>
                      )}
                    </div>

                    <div className="form-group mb-2 mr-sm-2">
                      <label
                        className="sr-only"
                        htmlFor="inlineFormInputGroupUsername2"
                      >
                        Book Genre
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div
                            className="input-group-text mb-3"
                            style={{ height: "70%" }}
                          >
                            <FontAwesomeIcon icon={faBookOpen} />
                          </div>
                        </div>
                        <select
                          className="form-control mb-3"
                          id="inlineFormCustomSelectPref"
                          value={bookGenre}
                          onChange={(e) => setBookGenre(e.target.value)}
                        >
                          <option value="">Choose book Genre</option>
                          <option value="fantasy">Fantasy</option>
                          <option value="sci fi">Science fiction</option>
                          <option value="fiction">Fiction</option>
                          <option value="horror">Horror</option>
                          <option value="romance">Romance</option>
                        </select>
                      </div>
                      {error.bookGenre && (
                        <div className="text-danger">{error.bookGenre}</div>
                      )}
                    </div>

                    <div className="d-inline-flex  mb-3">
                      <div className="form-group ">
                        <label
                          className="custom-file-label pe-2"
                          htmlFor="customFile"
                        >
                          Choose file
                        </label>
                        <input
                          type="file"
                          className="custom-file-input"
                          id="customFile"
                          onChange={(e) => setFile(e.target.files[0])}
                        />
                        {error.file && (
                          <div className="text-danger">{error.file}</div>
                        )}
                      </div>

                      <div className="form-group mb-2 mr-sm-2">
                        <label className="mr-2 pe-2">Quantity</label>
                        <div
                          className="btn-group w-50"
                          role="group"
                          aria-label="book quatity"
                        >
                          <button
                            type="button"
                            className="btn btn-info"
                            onClick={() =>
                              setQuantity(quantity > 1 ? quantity - 1 : 1)
                            }
                          >
                            -
                          </button>
                          <input
                            type="Number"
                            className="form-control quantity-input"
                            value={quantity}
                            onChange={handlequantityChange}
                            min="0"
                          />
                          <button
                            type="button"
                            className="btn btn-info"
                            onClick={() => setQuantity(quantity + 1)}
                          >
                            +
                          </button>
                          {error.quantity && (
                            <div className="text-danger">{error.quantity}</div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col text-center">
                        <button
                          type="submit"
                          className="btn btn-info mb-2 me-3"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary mb-2"
                          onClick={handleHideForm}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}

            <div className="row mt-3">
              <div className="col ">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Book cover</th>
                      <th scope="col">Book Name</th>
                      <th scope="col">Book Genre</th>
                      <th scope="col">Quatity</th>
                      <th scope="col">Stock</th>
                      <th scope="col">Select</th>
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
                            className="bthumnail"
                          />
                        </td>
                        <td>{book.bookName}</td>
                        <td>{book.bookGenre}</td>
                        <td>{book.quantity}</td>
                        <td>
                          {book.quantity < 1 ? "Out of Stock" : "In Stock"}
                        </td>
                        <td>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input border border-black"
                              id="exampleCheck1"
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Inventory;
