import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState, useEffect } from 'react';

function App() {
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    // Check if there's a success message in localStorage
    const successMessage = localStorage.getItem('signupSuccess');
    if (successMessage) {
      setAlertMessage(successMessage);
      localStorage.removeItem('signupSuccess');  // Remove the message after showing it
    }
  }, []);

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          {/* Show the alert with the message if there's any */}
          <Alert message={alertMessage} />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
