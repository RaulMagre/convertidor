import "./App.css";
import Convert from "./components/Convert";
import Header from "./components/Header";
import Saved from "./components/Saved";

function App() {
  return (
    <>
      <div className="container">
        <div>
          <Header />
          <Convert />
          <Saved />
        </div>
      </div>
    </>
  );
}

export default App;
