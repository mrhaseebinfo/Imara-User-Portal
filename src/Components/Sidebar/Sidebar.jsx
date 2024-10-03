import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./Sidebar.css";
import { images } from "../../assets/Data/Data";
import { MdOutlineDashboard, MdOutlineLogout } from "react-icons/md";
import { RiCalendarEventLine } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";
import { IoFileTrayStacked } from "react-icons/io5";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <nav className={`sidebar text-white ${isOpen ? "open" : ""}`}>
      <div className="ps-3 pe-1 pt-3 pb-3 red-border-bottom">
        {/* Image for larger screens (laptops, desktops, tablets) */}
        <img src={images.dashlog} alt="logo" className="logo-large-screen" />

        {/* Image for mobile screens */}
        <img
          src={images.log}
          alt="logo"
          className="logo-mobile-screen ms-5 mt-3"
          style={{ width: "90px" }}
        />
      </div>
      <button
        className="close-btn btn btn-dark d-md-none"
        onClick={toggleSidebar}
      >
        &times;
      </button>
      <div className="mt-4">
        <Nav className="flex-column  gap-2">
          <Nav.Link as={Link} to="/layout/dashboard" className="sidebar-link">
            <MdOutlineDashboard className="sidebar-icon " />
            &nbsp;&nbsp; Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/layout/investment" className="sidebar-link">
            <RiMoneyDollarBoxLine className="sidebar-icon" />
            &nbsp;&nbsp; My Investment
          </Nav.Link>
          <Nav.Link as={Link} to="/layout/events" className="sidebar-link">
            <RiCalendarEventLine className="sidebar-icon" />
            &nbsp;&nbsp; Events
          </Nav.Link>
          <Nav.Link as={Link} to="/layout/imarat" className="sidebar-link">
            <IoFileTrayStacked className="sidebar-icon" />
            &nbsp;&nbsp; Imarat Executive Club
          </Nav.Link>
          <Nav.Link as={Link} to="/layout/loyalty" className="sidebar-link">
            <IoFileTrayStacked className="sidebar-icon" />
            &nbsp;&nbsp; Loyalty Program
          </Nav.Link>
          <Nav.Link as={Link} to="/layout/support" className="sidebar-link">
            < FaTicket className="sidebar-icon" />
            &nbsp;&nbsp; Support Ticket
          </Nav.Link>
        </Nav>
      </div>
      <div className="margin-top">
        <Nav className="flex-column gap-2">
          <Nav.Link as={Link} to="/layout/faq" className="sidebars-link">
            <FaQuestionCircle className="sidebar-icon" />
            &nbsp;&nbsp; FAQ&apos;s
          </Nav.Link>
          <Nav.Link as={Link} to="/" className="sidebars-link">
            <MdOutlineLogout className="sidebar-icon" />
            &nbsp;&nbsp; Logout
          </Nav.Link>
        </Nav>
      </div>
    </nav>
  );
}

export default Sidebar;
