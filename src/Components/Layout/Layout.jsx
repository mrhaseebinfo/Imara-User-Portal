/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Navbar/Navbar";
import "../../App.css";
import { images } from "../../assets/Data/Data";

const Layout = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(94, 67, 81, 0) 0%, #2C4351 100%), url(${images.bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div className="app-container d-flex" style={{ height: "100vh" }}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} fixed />
        <div
          className={`content-area flex-grow-1 ${
            isSidebarOpen ? "ml-50" : ""
          }`}
        >
          <Header
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
            className="position-fixed"
          />
          <main className="main-content">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
