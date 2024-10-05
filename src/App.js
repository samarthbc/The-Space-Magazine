import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SolarSystem from "./Components/SolarSystem";
import News from "./Components/News";
import Quizzes from "./Components/Quizzes";
import Ebooks from "./Components/Ebooks";
import Simulation from "./Components/Simulation";
import Explore from "./Components/Explore";
import Magazines from "./Components/Magazines";

function App() {
    return(
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/news" element={<News/>}></Route>
                    <Route path="/quizzes" element={<Quizzes/>}></Route>
                    <Route path="/ebooks" element={<Ebooks/>}></Route>
                    <Route path="/simulation" element={<Simulation/>}></Route>
                    <Route path="/explore" element={<Explore/>}></Route>
                    <Route path="/magazines" element={<Magazines/>}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default App;