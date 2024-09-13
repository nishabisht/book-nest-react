import React from "react";
import "./About.css"; // Assume you have some basic styling in About.css
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <h1>About Our Digital Library</h1>
        <p>
          Welcome to our digital library, where we aim to provide a vast
          collection of digital resources to support education and research. Our
          library offers a wide range of e-books, journals, and multimedia
          content that can be accessed from anywhere at any time.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to democratize access to knowledge and information. We
          strive to offer a comprehensive and diverse collection of digital
          resources to help individuals achieve their educational and
          professional goals.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or need assistance, feel free to reach out
          to us:
        </p>
        <ul>
          <li>Email: support@digitallibrary.com</li>
          <li>Phone: +1 (123) 456-7890</li>
        </ul>

        <h2>Follow Us</h2>
        <p>Stay connected with us on social media:</p>
        <ul>
          <li>Facebook: facebook.com/digitallibrary</li>
          <li>Twitter: twitter.com/digitallibrary</li>
          <li>Instagram: instagram.com/digitallibrary</li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default About;
