import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import { Suspense } from "react";
import Loader from "./components/loader/Loader";
import LoginPage from "./pages/Auth/LoginPage";

function App() {
  return (
    <div id="app">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
