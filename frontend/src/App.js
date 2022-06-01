import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Screens/LandingPage/LandingPage";
import MyNotes from "./Screens/MyNotes/MyNotes";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mynotes" element={<MyNotes />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
