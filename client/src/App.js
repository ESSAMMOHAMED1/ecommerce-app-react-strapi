import { useEffect } from "react";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
