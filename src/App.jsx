import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HOME_PATH } from "./constants/routes";
import Home from "./pages/Home";
import New from "./pages/NewNew";
import NewNew from "./pages/NewNew";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={HOME_PATH} exact element={<Home />} /> */}
        {/* <Route path={HOME_PATH} exact element={<New />} /> */}
        <Route path={HOME_PATH} exact element={<NewNew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
