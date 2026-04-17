import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home/Home";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";
import OurWork from "./pages/OurWork/OurWork";
import CaseStudy from "./pages/CaseStudy/CaseStudy";
import Resource from "./pages/Resource/Resource";
import Company from "./pages/Company/Company";
import JoinUs from "./pages/JoinUs/JoinUs";
import Contact from "./pages/Contact/Contact";
import FAQ from "./pages/FAQ/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Terms from "./pages/Terms/Terms";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout wrapper */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="what-we-do" element={<WhatWeDo />} />
          <Route path="our-work" element={<OurWork />} />
          <Route path="case-study" element={<CaseStudy />} />
          <Route path="resource" element={<Resource />} />
          <Route path="company" element={<Company />} />
          <Route path="join-us" element={<JoinUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;