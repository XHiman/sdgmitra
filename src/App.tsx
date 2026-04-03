import "./App.css";
//import DistrictPage from './components/districtPages/Districts'
import { Route, Routes } from "react-router";
import SDGMain from "./components/SDG/SDGMain";

function App() {
  return (
    <div className="AppDiv" id="ToPageTop">
      <title>MahaSDG</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      {/* <UtilityBar />
      <Navbar />
      <ScrollToAnchor /> */}
      <section className="AppBody">
        <Routes>
          {/* <Route index element={<HomePage />} />
          <Route
            path="/Annual-Action-Plan"
            element={<AAPDash district="Nashik" />}
          />
          <Route path="/AAP-Dashboard" element={<AAPDashboard />} />
          <Route path="/mahastride" element={<MSride />} />
          <Route path="/districts" element={<DistrictPage />} /> */}
          <Route index element={<SDGMain />} />
        </Routes>
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
