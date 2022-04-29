import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Nav from "./components/Nav/Nav";
import Result from "./Pages/Result/Result";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/result"
            element={<Result />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
