import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DefaultPage = () => {
  return (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh' 
      }}>
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
};

export default DefaultPage;
