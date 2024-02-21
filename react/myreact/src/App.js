// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import "./App.css";

import Header from "./component/Header";
import Inventory from "./component/Inventory";
import Channel from "./component/Channel";
import Orders from "./component/Orders";
import Shopping from "./component/Shopping";
import Dashbord from "./component/Dashbord";
import Navbar from "./component2/Navbar";
import Footer from "./Footer";


function App() {
  

  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        
        <nav className="navigation-bar">
          <NavLink to="/dashbord" className="nav-item" activeClassName="active">
            Dashboard
          </NavLink>
          <NavLink
            to="/inventory"
            className="nav-item"
            activeClassName="active"
          >
            Inventory
          </NavLink>
          <NavLink to="/channel" className="nav-item" activeClassName="active">
            Channel
          </NavLink>
          <NavLink to="/orders" className="nav-item" activeClassName="active">
            Orders
          </NavLink>
          <NavLink to="/shopping" className="nav-item" activeClassName="active">
            Shopping
          </NavLink>
        </nav>
        

        <Routes>
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/shopping" element={<Shopping />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
