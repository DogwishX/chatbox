import "./App.css";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import ChatBox from "./components/ChatBox/ChatBox";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <ChatBox />
    </div>
  );
}

export default App;
