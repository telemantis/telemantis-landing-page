import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

export function AppRouter() {
  return (
    <BrowserRouter basename="telemantis-landing-page">
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
