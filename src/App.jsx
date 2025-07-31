import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import './styles/App.css';

function App() {
  return (
    <div className="appContainer">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
