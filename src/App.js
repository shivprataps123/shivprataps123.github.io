import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill";
import Contact from "./Components/Contact/Contact";
//import Proj from './Components/Project/Project';
function App(){
    return (
        <>
        <Navbar/>
        <Home/>
        <About/>
        <Skill/>
       
        <Contact/>
        </>
    )
}
export default App;