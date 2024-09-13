import React from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const bookDataCard = [
    {
      src: `${process.env.PUBLIC_URL}/assets/images/fantasy.jpg`,
      type: "Fantasy",
      icon: faBookOpen,
      text: "Fantasy is a genre of fiction involving magical elements, as well as a work in this genre. Its roots are in oral traditions, which became fantasy literature and drama.",
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/sifi.png`,
      type: "Science fiction",
      icon: faBookOpen,
      text: "Science fiction is a genre of speculative fiction, which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life",
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/friction.jpg`,
      type: "Fiction",
      icon: faBookOpen,
      text: "Fiction is any creative work, chiefly any narrative work, portraying individuals, events, or places that are imaginary or in ways that are imaginary.",
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/horror.jpg`,
      type: "Horror",
      icon: faBookOpen,
      text: "Horror is a genre of fiction that is intended to disturb, frighten, or scare. Horror is often divided into the sub-genres of psychological horror and supernatural horror,",
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/romance.jpg`,
      type: "Romance novel",
      icon: faBookOpen,
      text: "A romance novel or romantic novel is a genre fiction novel that primarily focuses on the relationship and romantic love between two people",
    },
  ];

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="overlay">
            <div>
              <FontAwesomeIcon icon={faBookOpen} />
            </div>
            <h1>BOOK NEST</h1>
            <div>Your dream library</div>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={`${process.env.PUBLIC_URL}/assets/images/banner2.png`}
                alt="First slide"
                style={{ height: "70vh" }}
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={`${process.env.PUBLIC_URL}/assets/images/banner3.avif`}
                alt="Second slide"
                style={{ height: "70vh" }}
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={`${process.env.PUBLIC_URL}/assets/images/banner1.jpg`}
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="row">
          {bookDataCard.map((book, index) => (
            <div className="col my-3 mx-3" key={index}>
              <div
                className="card shadow rounded theme-border"
                style={{ width: "17rem", height: "26rem" }}
              >
                <div className="card-head ">
                  <img
                    className="card-img-top"
                    src={book.src}
                    alt="Card image cap"
                    style={{ height: "11rem" }}
                  />
                </div>
                <div className="card-body">
                  <div className="card-overlay rounded">{book.type}</div>
                  <div className="icon p-2 fs-3 shadow rounded-circle">
                    <FontAwesomeIcon icon={book.icon} />
                  </div>
                  <p className="card-text mt-3">{book.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row" style={{ height: "2rem" }}></div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
