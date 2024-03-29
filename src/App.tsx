import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LaunchList from './components/LaunchList';
import LaunchDetails from './components/LaunchDetails'
import ErrorPage from './components/ErrorPage'

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">SpaceX Launches</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/launches">Launch List</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/launcheDetail">Launch Details</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/launches/:launchId" element={<LaunchDetails />} />
            <Route path="/launcheDetail" element={<ErrorPage />} />
            <Route path="/" element={<LaunchList />} />
            <Route path="/launches" element={<LaunchList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

