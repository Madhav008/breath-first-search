import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Introdution from './components/Introdution';
import Background from './components/Background';
import VerifyEmail from './components/VerifyEmail';
function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/introduction' element={<Introdution />} />
            <Route path='/background' element={<Background />} />
            <Route path='/verify' element={<VerifyEmail />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}



export default App;
