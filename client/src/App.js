import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import GuestRoutes from './components/GuestRoutes';
import Register from './Pages/Auth/Register';
import PrivateRoutes from './components/PrivateRoutes';
import Compiler from './Pages/Compiler/Compiler'
import Interview from './Pages/Interview/Interview'
import Profile from './Pages/Profile/Profile'
import Contest from './Pages/Contest/Contest'


function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<GuestRoutes/>}>
              <Route path='/register' element={<Register />} />
            </Route>
            <Route element={<PrivateRoutes/>}>
            <Route path='/compiler' element={<Compiler />} />
            <Route path='/contest' element={<Contest />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/interview' element={<Interview />} />

            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}



export default App;
