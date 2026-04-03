import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Navbar />
      <main className="flex-1 pt-[105px] lg:pt-[117px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}