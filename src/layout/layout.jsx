// Layout.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />

      <main>
        <Outlet /> {/* Yahan pages render honge */}
      </main>

    <Footer/>
    </>
  );
}