import "./App.css";
import College_name from "./components/College_name";
import Main_Navbar from "./components/Main_Navbar";
import Top_Navbar from "./components/Top_Navbar";

function App() {
  return (
    <>
      <div>
        <Top_Navbar />
        <College_name />
        <Main_Navbar />
      </div>
    </>
  );
}

export default App;
