import "./App.css";
import Convert from "./components/Convert";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="container">
        <div>
          <Header />
          <Convert />
        </div>
      </div>
    </>
  );
}

export default App;
