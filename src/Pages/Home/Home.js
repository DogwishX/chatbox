import Hero from "../../components/Hero/Hero";
import ChatBox from "../../components/ChatBox/ChatBox";
import ChatIcon from "../../components/ChatIcon/ChatIcon";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Cards from "../../components/Cards/Cards";
import FAQ from "../../components/FAQ/FAQ";
import "./Home.css";

function Home() {
  return (
    <div id="home">
      <Hero />
      <ChatIcon />
      <HowItWorks />
      <Cards />
      <FAQ />
      <ChatIcon />
      <ChatBox />
    </div>
  );
}

export default Home;
