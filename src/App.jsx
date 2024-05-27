import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Forum from "./pages/Forum.jsx";
import Topic from "./pages/Topic.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/forum" element={<Forum />} />
        <Route exact path="/topic/:id" element={<Topic />} />
      </Routes>
    </Router>
  );
}

export default App;