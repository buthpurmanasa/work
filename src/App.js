import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import { registerUser, verifyUser } from './mockBackend';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData);
    setIsSubmitted(true);
    setTimeout(() => {
      alert('Your registration is successful. Kindly check your mail for profile verification.');
    }, 500);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="center-form">
            <div className="form-container">
              {!isSubmitted ? (
                <form className="row g-3" onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col">
                      <label>First Name</label>
                      <input type="text" className="form-control" placeholder="First name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="col">
                      <label>Last Name</label>
                      <input type="text" className="form-control" placeholder="Last name" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" placeholder="1234 Main St" name="address" value={formData.address} onChange={handleChange} required />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Address 2</label>
                    <input type="text" className="form-control" placeholder="Apartment, studio, or floor" name="address2" value={formData.address2} onChange={handleChange} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} required />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">State</label>
                    <select className="form-select" name="state" value={formData.state} onChange={handleChange} required>
                      <option value="" disabled>Choose...</option>
                      <option>Telangana</option>
                      <option>Tamilnadu</option>
                      <option>Andra pradesh</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label className="form-label">Zip</label>
                    <input type="text" className="form-control" name="zip" value={formData.zip} onChange={handleChange} required />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck" />
                      <label className="form-check-label" htmlFor="gridCheck">Check me out</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                  </div>
                </form>
              ) : (
                <Verification email={formData.email} />
              )}
            </div>
          </div>
        } />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

function Verification({ email }) {
  const navigate = useNavigate();

  const handleVerify = () => {
    if (verifyUser(email)) {
      alert('Your profile is now verified and activated.');
      navigate('/home');
    } else {
      alert('Verification failed. Please try again.');
    }
  };

  return (
    <div className="verification-container">
      <h5>Check your email for verification link.</h5>
      <button onClick={handleVerify} className="btn btn-success">Verify Email</button>
    </div>
  );
}

export default App;
