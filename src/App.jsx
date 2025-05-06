import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ArtistLogin from './pages/ArtistLogin';
import HostLogin from './pages/HostLogin';
import PromoterLogin from './pages/PromoterLogin';

const App = () => {
  return (
    <Router>
      <div className="container">
        <h1>Login Portal</h1>
        <nav>
          <Link to="/artist">Artist</Link>
          <Link to="/host">Venue/Host</Link>
          <Link to="/promoter">Promoter/Manager</Link>
        </nav>
        <Routes>
          <Route path="/artist" element={<ArtistLogin />} />
          <Route path="/host" element={<HostLogin />} />
          <Route path="/promoter" element={<PromoterLogin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
