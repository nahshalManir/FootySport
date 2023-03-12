import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import News from './components/News';
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
        {/* <Route exact path="/uefa-champions-league" element={<League/>} />
        <Route exact path="/uefa-europa-league" element={<League/>} />
        <Route exact path="/premier-league" element={<League/>} />
        <Route exact path="/laliga" element={<League/>} />
        <Route exact path="/bundesliga" element={<League/>} />
        <Route exact path="/ligue-1" element={<League/>} />
        <Route exact path="/serie-a" element={<League/>} /> */}
        <Route exact path="/:country/:league" element={<League/>} />
        <Route exact path="/:league" element={<League/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
