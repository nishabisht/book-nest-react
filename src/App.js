import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import UserLogin from "./pages/Login/UserLogin";

function App() {
  return (
    <>
      {/* <Home /> */}
      <UserLogin />
      <Footer />
    </>
  );
}

export default App;
