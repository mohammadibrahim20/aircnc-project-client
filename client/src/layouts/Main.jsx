import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-28 pb-20"><Outlet /></div>
      <Footer/>
    </div>
  );
};

export default Main;
