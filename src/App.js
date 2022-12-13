import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill";
import Contact from "./Components/Contact/Contact";
import Proj from "./Components/Project/Project";
import Github from "./Components/Stats/Github";
//import Proj from './Components/Project/Project';
//import Stats from './Components/Stats'
function App(){
    return (
        <>
        <Navbar/>
        
        <Home/>
        <About/>
        <Skill/>
        <Github/>
        <Proj/>
        <Contact/>
        </>
    )
}
export default App;