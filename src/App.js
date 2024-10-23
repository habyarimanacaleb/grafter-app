import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Animals from './pages/Animals';
import Reviews from './pages/Reviews';
import Booking from './pages/Booking';
import Footer from './components/Footer';

import './App.css';
import PlanYourVisit from './services/PlanYourVisit';
import ExploreWildlife from './services/ExploreWildlife';
import BookYourStay from './services/BookYourStay';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="topspace"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/plan-your-visit" element={<PlanYourVisit />} />
        <Route path="/explore-wildlife" element={<ExploreWildlife />} />
        <Route path="/book-your-stay" element={<BookYourStay />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
