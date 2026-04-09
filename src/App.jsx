import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout wrapper */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;