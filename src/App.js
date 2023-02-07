import "./App.css";
import Header from "./sections/header/header";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Home />
    </div>
  );
}

export default App;
