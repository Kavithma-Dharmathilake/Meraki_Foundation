import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Footer from './common/footer';


//import pages
import Register from './pages/Register';
import Login from './pages/Login';
import Contact from './pages/Contact';
import About from './pages/About';
import Requests from './pages/Requests';
import Donation from './pages/Donation';
import Home from './pages/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
   

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          {/* Corrected path for "requests" route */}
          <Route path="/requests" element={<Requests />} />

          <Route path="/donation" element={<Donation />} />


        </Routes>

      </BrowserRouter>
      <Footer />


    </div>
  );
}

export default App;
