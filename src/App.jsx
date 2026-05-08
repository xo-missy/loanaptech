import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from "./components/About.jsx";
import Privacy from './components/Privacy.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import Signup from './pages/Signup.jsx';
import Navbar from './components/Navbar.jsx';
import Home from "./pages/Home.jsx";
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Terms from './components/Terms.jsx';
import Faq from './components/Faq.jsx';
import ApplyLoan from './pages/ApplyLoan.jsx';
import LoanDetails from './pages/LoanDetails.jsx';


function App() {
  return (
    <Router>
      <div className="App">
        <main style={{ minHeight: "100vh", paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/faq' element={<Faq/>}/>
            <Route path='/terms' element={<Terms/>}/>
            <Route path='/apply' element={<ApplyLoan/>}/>
            <Route path='/loan/:id' element={<LoanDetails/>}/>
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Navbar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;