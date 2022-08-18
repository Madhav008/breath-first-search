import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}



export default App;
