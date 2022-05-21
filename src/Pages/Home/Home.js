import { useEffect } from "react";
import ReactGA from "react-ga4";
import usePageTracking from "../../hooks/usePageTracker";

import Nav from "../../components/Nav/Nav";
import Hero from "../../components/Hero/Hero";
import ChatBox from "../../components/ChatBox/ChatBox";
import ChatIcon from "../../components/ChatIcon/ChatIcon";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Recommendations from "../../components/Recommendations/Recommendations";

import "./Home.css";

function Home() {
  usePageTracking();
  return (
    <div id="home">
      <Nav />
      <Hero />
      <HowItWorks />
      <Recommendations />
      <ChatIcon />
      <ChatBox />
    </div>
  );
}

export default Home;
