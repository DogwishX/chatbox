import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Questionnaire from "./Pages/Questionnaire/Questionnaire";
import Result from "./Pages/Result/Result";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/result" element={<Result />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
