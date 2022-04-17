import { Route, Routes } from "react-router-dom";
import "./App.css";
import CheckOut from "./components/CheckOut/CheckOut";
import About from "./components/Pages/About/About";
import Blogs from "./components/Pages/Blogs/Blogs";
import Footer from "./components/Pages/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import Navbar from "./components/Pages/Navbar/Navbar";
import NotFound from "./components/Pages/NotFound/NotFound";
import Services from "./components/Pages/Services/Services";
import SignUp from "./components/Pages/SignUp/SignUp";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
