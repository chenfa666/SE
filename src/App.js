import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HOME from "./pages/HOME";
import EMPLOYEES from "./pages/EMPLOYEES";
import ACCOUNTABILITYSYSTEM from "./pages/ACCOUNTABILITYSYSTEM";
import MCP from "./pages/MCP";
import COMMUNICATION from "./pages/COMMUNICATION";
import BACKOFFICERMAINPAGE from "./pages/BACKOFFICERMAINPAGE";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/employees":
        title = "";
        metaDescription = "";
        break;
      case "/accountability-system":
        title = "";
        metaDescription = "";
        break;
      case "/mcp":
        title = "";
        metaDescription = "";
        break;
      case "/communication":
        title = "";
        metaDescription = "";
        break;
      case "/back-officer-main-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HOME />} />
      <Route path="/employees" element={<EMPLOYEES />} />
      <Route path="/accountability-system" element={<ACCOUNTABILITYSYSTEM />} />
      <Route path="/mcp" element={<MCP />} />
      <Route path="/communication" element={<COMMUNICATION />} />
      <Route path="/back-officer-main-page" element={<BACKOFFICERMAINPAGE />} />
    </Routes>
  );
}
export default App;
