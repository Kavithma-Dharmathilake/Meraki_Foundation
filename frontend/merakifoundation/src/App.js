import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import Footer from './common/footer';
import { useAuthContext } from './hooks/useAuthContext';

//import pages
import Register from './pages/Register';
import Login from './pages/Login';
import Contact from './pages/Contact';
import About from './pages/About';
import Requests from './pages/Requests';
import Donation from './pages/Donation';
import Home from './pages/Home';
import Campaign from './pages/Campaign';
import InKindDonation from './pages/InKindDon';
import MemorialDonation from './pages/MemorialDon';
import BloodDonation from './pages/BloodDon';
import OneTimeDonation from './pages/OneTimeDon';
import MonthlyDonation from './pages/MonthlyDon';
import Profile from './pages/Profile';
import Terms from './pages/Terms';
import Payment from './pages/Payment';

//import css
import 'bulma/css/bulma.min.css';


function App() {

  const {user} = useAuthContext()
  return (
    <div>
      <BrowserRouter>
   

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/user"/>} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/user" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          {/* Corrected path for "requests" route */}
          <Route path="/requests" element={<Requests />} />
          <Route path="/requests/:id" element={<Campaign />} />

          <Route path="/user" element={user ? <Profile />: <Navigate to="/login" />} />


          <Route path="/donation" element={<Donation />} />

          <Route path="/inkind" element={<InKindDonation />} />
          <Route path="/memorial" element={<MemorialDonation />} /> 
          <Route path="/blood" element={<BloodDonation />} />
          <Route path="/monthly" element={<MonthlyDonation />} />
          <Route path="/onetime" element={<OneTimeDonation />} />

          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/payments/:amount1/:username1" element={<Payment />} />


          




        </Routes>

      </BrowserRouter>
      <Footer />


    </div>
  );
}

export default App;
