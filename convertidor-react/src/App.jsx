import "./App.css";
import Header from "./components/Header";
import Convert from "./components/Convert";
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
