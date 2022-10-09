import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";

// ! npx create-react-app my-app --template cra-template-pwa
function App() {
  return (
    <Browser>
      <div className="App bg-gray-800">
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<News topic="news" key="Home" head="General" />}
          ></Route>
          <Route
            exact
            path="/tech"
            element={<News topic="tech" key="Tech" head="Technology" />}
          ></Route>
          <Route
            exact
            path="/music"
            element={<News topic="music" key="Music" head="Music" />}
          ></Route>
          <Route
            exact
            path="/sports"
            element={<News topic="sport" key="Sports" head="Sports" />}
          ></Route>
          <Route
            exact
            path="/gaming"
            element={<News topic="gaming" key="Gaming" head="Gaming" />}
          ></Route>
          <Route
            exact
            path="/finance"
            element={<News topic="finance" key="Finance" head="Finance" />}
          ></Route>
          <Route
            exact
            path="/science"
            element={<News topic="science" key="Science" head="Science" />}
          ></Route>
          <Route
            exact
            path="/energy"
            element={<News topic="energy" key="Energy" head="Energy" />}
          ></Route>
          <Route
            exact
            path="/world"
            element={<News topic="world" key="World" head="World" />}
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                topic="entertainment"
                key="Entertainment"
                head="Entertainment"
              />
            }
          ></Route>
        </Routes>
      </div>
    </Browser>
  );
}

export default App;
