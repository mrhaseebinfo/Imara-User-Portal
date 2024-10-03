/* eslint-disable react/prop-types */
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import "./Navbar.css";
import { images } from "../../assets/Data/Data";

function Header({ toggleSidebar, isSidebarOpen }) {
  return (
    <header className="header d-flex justify-content-between align-items-center">
      {!isSidebarOpen && (
        <button className="btn text-white  d-md-none" onClick={toggleSidebar}>
          <HiOutlineMenuAlt2 />
        </button>
      )}
      <h1
        className={` ms-1 me-5 pe-5 d-block d-sm-none ${
          isSidebarOpen ? "d-none" : ""
        }`}
      >
        <img src={images.log} alt="logo" style={{ width: "90px" }} />
      </h1>

      <div
        className="input-group d-none d-sm-flex ms-0 ms-md-5 ps-0 ps-md-5 me-md-5 ms-2 me-2 input-group-search"
        style={{ width: "100%", maxWidth: "500px"}} // Add paddingLeft here
      >
        <span className="input-group-text" id="basic-addon1">
          <IoSearch />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="dropdown rounded">
        <div className="d-flex align-items-center me-md-5 me-sm-2">
          <span className="fs-2">
            <FaRegUserCircle />
          </span>
          <button
            className="btn pt-2 dropdown-toggle text-black"
            type="button"
            id="userDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Admin
          </button>

          <ul className="dropdown-menu" aria-labelledby="userDropdown">
            <li>
              <a className="dropdown-item" href="/layout/profile">
                Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
