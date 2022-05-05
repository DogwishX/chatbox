import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Questionnaire from "./Pages/Questionnaire/Questionnaire";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
