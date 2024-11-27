import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Register } from './pages/Register';
import { CreateProfile } from './pages/CreateProfile';
import { Subscription } from './pages/Subscription';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;