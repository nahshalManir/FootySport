import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import MatchData from './components/MatchData';
import League from './components/League';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path="/:matchId" element={<MatchData />} />
        <Route exact path="/:country/:league" element={<League/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
