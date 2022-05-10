import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Questionnaire from "./Pages/Questionnaire/Questionnaire";
import SkinPage from "./Pages/SkinPage/SkinPage";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route
            path="/osnf"
            element={<SkinPage selectedSkinType={"osnf"} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
