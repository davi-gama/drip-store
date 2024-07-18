import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { Navigation } from "./routes/Navigation";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
