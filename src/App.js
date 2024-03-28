import './App.css'
import Signup from './Components/Pages/Home/Signup'
import Login from './Components/Pages/Home/Login'
import Dashboard from './Components/Pages/Home/Dashboard'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
