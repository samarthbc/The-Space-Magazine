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
                </Routes>
            </Router>
        </>
    )
}

export default App;