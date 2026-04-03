import "./App.css";
//import DistrictPage from './components/districtPages/Districts'
import { Route, Routes } from "react-router";
import SDGMain from "./components/SDG/SDGMain";

function App() {
  return (
    <div className="AppDiv" id="ToPageTop">
      <title>MahaSDG</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <section className="AppBody">
        <Routes>
          <Route index element={<SDGMain />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
