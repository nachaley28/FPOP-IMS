import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import LandingPage from "./pages/Landing";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Stockin from "./pages/Stockin";
import Stockout from "./pages/Stockout";
import Transfers from "./pages/Transfers";
import StockAudit from "./pages/StockAudit";
import OutStock from "./pages/OutStock";
import LowStock from "./pages/LowStock";

function RouteWithTransitions() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} timeout={1000} classNames="page">
        <div className="page-container">
          <Routes location={location}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/stockin" element={<Stockin />} />
            <Route path="/stockout" element={<Stockout />} />
            <Route path="/transfers" element={<Transfers />} />
            <Route path="/stockaudit" element={<StockAudit />} />
            <Route path="/outstock" element={<OutStock />} />
            <Route path="/lowstock" element={<LowStock />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <RouteWithTransitions />
      </div>
    </Router>
  );
}

export default App;
