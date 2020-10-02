import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Row, Col } from "reactstrap";
// Components
import { SignLogContainer, Form } from "./main";
// Firebase authentication
import { auth } from "../../config/firebase";

export default function SignLog() {
  // Log In
  const [logEmail, setLogEmail] = useState("");
  const [logPass, setLogPass] = useState("");
  // Sign In
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [signEmail, setsignEmail] = useState("");
  const [signPass, setSignPass] = useState("");
  // History
  const history = useHistory();

  const handleLogIn = e => {
    e.preventDefault();

    // firebase job
    auth
      .signInWithEmailAndPassword(logEmail, logPass)
      .then(auth => {
        alert("🚀 Welcome back!! 🚀")

        history.push("/")
      })
      .catch(error => alert(error.message))
  }

  const handleSignIn = e => {
    e.preventDefault();

    // firebase job to create a user
    auth
      .createUserWithEmailAndPassword(signEmail, signPass)
      .then((auth) => {
        // if the user was successfully created
        if (auth) {
          alert("🚀 Welcome to our team!! 🚀")

          history.push("/");
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <SignLogContainer>
      <Row>
        {/* Log In */}
        <Col className="formBox" sm="6">
          <Link to="/">
            <i className="fas fa-chevron-circle-left fa-2x"></i>
          </Link>

          <h2>I'm new</h2>

          <Form onSubmit={handleLogIn}>
            <input 
              type="email" 
              name="loginemail" 
              className="login" 
              id="login-email" 
              placeholder="Email address"
              value={logEmail}
              onChange={e => setLogEmail(e.target.value)}
              required 
            />
            <input 
              type="password" 
              name="loginPassword" 
              id="login-Password" 
              placeholder="Password"
              value={logPass}
              onChange={e => setLogPass(e.target.value)}
              required 
            />
            <button>Log In</button>
          </Form>
        </Col>
        {/* Sign In */}
        <Col sm="6" className="formBox">
          <h2>I have an account</h2>

          <Form onSubmit={handleSignIn}>
            <input 
              type="text" 
              name="username" 
              id="name" 
              className="name" 
              placeholder="Full name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <input 
              type="email" 
              name="emailAdress" 
              id="email" 
              className="email" 
              placeholder="Email address"
              value={signEmail}
              onChange={e => setsignEmail(e.target.value)}
              required
            />
            <input 
              type="text" 
              name="phone" 
              id="phone" 
              placeholder="Phone number - Optional"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
            <input 
              type="password" 
              name="password" 
              id="password" 
              className="pass" 
              placeholder="Password"
              value={signPass}
              onChange={e => setSignPass(e.target.value)}
              required
            />
            <button>Sign Up Now</button>
          </Form>
        </Col>
      </Row>
    </SignLogContainer>
  )
}
