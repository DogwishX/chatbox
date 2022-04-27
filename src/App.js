import "./App.css";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import ChatBox from "./components/ChatBox/ChatBox";
import ChatIcon from "./components/ChatIcon/ChatIcon";
import HowItWorks from "./components/HowItWorks/HowItWorks";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <ChatBox />
      <ChatIcon />
      <HowItWorks />
    </div>
  );
}

export default App;
