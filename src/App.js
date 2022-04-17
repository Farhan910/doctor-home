import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About/About';
import Blogs from './components/Pages/Blogs/Blogs';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Navbar from './components/Pages/Navbar/Navbar';
import NotFound from './components/Pages/NotFound/NotFound';
import Services from './components/Pages/Services/Services';
import SignUp from './components/Pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="*" element={<NotFound/>} />

      </Routes>
    </div>
  );
}

export default App;
