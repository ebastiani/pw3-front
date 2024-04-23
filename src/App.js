import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Telas/Home/Home'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  return (
  
    <Router>
    
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
