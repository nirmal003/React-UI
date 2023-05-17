import "./App.css";
import MainBar from "./components/MainBar/MainBar";
import SideBar from "./components/SideBar/SideBar";
import TopNavBar from "./components/TopBar/TopNavBar";

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <div className="homebar">
        <SideBar />
        <MainBar />
      </div>
    </div>
  );
}

export default App;
