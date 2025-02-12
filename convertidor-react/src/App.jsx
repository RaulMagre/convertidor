import "./App.css";
import Header from "./components/Header";
import Convert from "./components/Convert";
import Saved from "./components/Saved";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <div>
          <Header />
          <Convert />
          <Saved />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
