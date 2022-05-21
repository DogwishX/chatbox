import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import pages from "./data/pages";
import SectionPage from "./Pages/CategoryPage/CategoryPage";
import Questionnaire from "./Pages/Questionnaire/Questionnaire";
import SkinPage from "./Pages/SkinPage/SkinPage";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/base" element={<App />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          {pages.map((page) => (
            <>
              <Route
                path={`/${page.id}`}
                element={
                  page.id !== "base" && <SkinPage selectedSkinType={page.id} />
                }
              />
              {page.categories.map(({ categoryId }, index) => (
                <Route
                  key={index}
                  path={`/${page.id}/${categoryId}`}
                  element={
                    <SectionPage skinTypeId={page.id} categoryId={categoryId} />
                  }
                />
              ))}
            </>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
