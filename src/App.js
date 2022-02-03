import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import College_name from "./components/College_name";
import { Counter } from "./components/Counter";
import Main_Navbar from "./components/Main_Navbar";
import Top_Navbar from "./components/Top_Navbar";
import Carousole from "./components/Carousole";
import MissionVisionAbout from "./components/MissionVisionAbout";
import PrincipalNews from "./components/PrincipalNews";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Copyright from "./components/Copyright";
import Departments from "./components/Departments";

function App() {
  return (
    <>
      <div>
        <Top_Navbar />
        <College_name />
        <Main_Navbar />
        <Carousole />
        <Counter />
        <MissionVisionAbout />
        <PrincipalNews />
        <Departments/>
        <Section />
        <Footer />
        <Copyright />
      </div>
    </>
  );
}

export default App;
