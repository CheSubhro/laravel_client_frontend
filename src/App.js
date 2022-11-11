import './App.css'
import Signup from './Components/Pages/Home/Signup'
import Login from './Components/Pages/Home/Login'
import Dashboard from './Components/Pages/Home/Dashboard'
import Header from './Components/Pages/Reusables/Header/Header'
import Footer from './Components/Pages/Reusables/Footer/Footer'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
