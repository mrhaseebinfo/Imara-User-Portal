/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Support.css";
import { FaSearch } from "react-icons/fa";
import {TicketData} from '../../assets/Data/Data.js';
import AddTicket from "./Ticket/AddTicket";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

// import { jsPDF } from "jspdf";

const Popup = ({ ticket, onClose }) => {

  //   Download Ticket pdf Format
  // const downloadPdf = () => {
  //   const doc = new jsPDF();
    
    
  //   doc.text(20, 20, `Ticket ID: ${ticket.id}`);
  //   doc.text(20, 30, `Ticket Name: ${ticket.name}`);
  //   doc.text(20, 40, `Details: ${ticket.details}`);
    
  //   doc.save(`${ticket.id}.pdf`);
  // };

  return (
    <div className="popup-overlay ">
      <div className="popup-content">
        <div className="d-flex justify-content-between ms-1 me-1 border-bottom border-secondary">
          <div className="d-flex gap-2">
            <h6>{`Ticket # ${ticket.ticketNumber}`}</h6>
            <span
              className="bg mb-3 ms-1 ps-2 pe-2 disabled-status"
              onClick={(e) => e.stopPropagation()}
            >
              {ticket.status}
            </span>
          </div>
          <button onClick={onClose} className="cross-btn">
            <RxCrossCircled className="mb-2 fs-3" />
          </button>
        </div>

        
        <div className="d-flex justify-content-between mb-3">
          <span className="text-secondary">{`Created at ${ticket.createdAt}`}</span>
          <span className="fw-bold text-primary">{`Ticket Status: ${ticket.ticketStatus}`}</span>
        </div>

        
        <div>
          <span>{ticket.description}</span>
        </div>

        
        {ticket.document && (
          <div>
            <button className="btn border mt-1 mb-2" >
              <MdOutlineFileDownload />
              &nbsp; {ticket.document}
            </button>
          </div>
        )}

        
        <div className="input-group mb-3 border rounded border-secondary">
          <input
            type="text"
            className="form-control"
            placeholder="Write a comment here"
            aria-label="Write a comment here"
          />
          <button className="btn" type="button">
            <IoIosSend />
          </button>
        </div>
        <div className="scrollable-ticket">
          
          <div className="comment-section">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex gap-2 align-items-center">
                <img src={ticket.userImage} alt="User" className="user-image" />
                <h6>{ticket.userName}</h6>
              </div>
              <span>{ticket.timeAgo}</span>
            </div>
            <div className="comment-text ms-5 me-2 ">{ticket.comment}</div>
          </div>

          <div className="comment-section">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex gap-2 align-items-center">
                <img src={ticket.userImage} alt="User" className="user-image" />
                <h6>{ticket.userName}</h6>
              </div>
              <span>{ticket.timeAgo}</span>
            </div>
            <div className="comment-text ms-5 me-2">{ticket.description}</div>
          </div>

          <div className="comment-section">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex gap-2 align-items-center">
                <img src={ticket.userImage} alt="User" className="user-image" />
                <h6>{ticket.userName}</h6>
              </div>
              <span>{ticket.timeAgo}</span>
            </div>
            <div className="comment-text ms-5 me-2">{ticket.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SupportTicket = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Tickets");
  const [currentSection, setCurrentSection] = useState("All Tickets");
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // New state for search term

  const filterTickets = () => {
    return TicketData.filter(ticket => {
      const isCategoryMatch = selectedCategory === "All Tickets" || ticket.status === selectedCategory;
      const isSearchMatch = ticket.ticketNumber.toLowerCase().includes(searchTerm.toLowerCase());
      return isCategoryMatch && isSearchMatch;
    });
  };

  const handleViewDetail = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleClosePopup = () => {
    setSelectedTicket(null);
  };

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="support rounded child-bg">
      <div className="row ms-3 pt-3">
        <h6 className="fs-4 fw-bold">Support Overview</h6>
      </div>
      <div className="d-flex sm-flex justify-content-between me-5 mt-4 mb-4">
        <div className="col-md-3 ms-4 d-flex justify-content-center">
          <div className="input-group search-group">
            <span
              className="input-group-text bg-white"
              id="search-addon"
              style={{ border: "none" }}
            >
              <FaSearch />
            </span>
            <input
              type="search"
              className="form-control bg-white custom-search-input"
              placeholder="Search by Ticket Number..."
              aria-label="Search"
              aria-describedby="search-addon"
              style={{ border: "none" }}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            />
          </div>
        </div>
        <div className="sm-screen">
          <AddTicket />
        </div>
      </div>

      {/* Category Selection */}
      <div className="tabs-container">
        <div className="tabs">
          <div className={`tab ${currentSection === "All Tickets" ? "active" : ""}`} onClick={() => handleSectionChange("All Tickets")}>
            <span className={`tab-text ${currentSection === "All Tickets" ? "active" : ""}`} onClick={() => setSelectedCategory("All Tickets")}>All Tickets</span>
          </div>
          <div className={`tab ${currentSection === "Complain" ? "active" : ""}`} onClick={() => handleSectionChange("Complain")}>
            <span className={`tab-text ${currentSection === "Complain" ? "active" : ""}`} onClick={() => setSelectedCategory("Complain")}>Complain</span>
          </div>
          <div className={`tab ${currentSection === "Query" ? "active" : ""}`} onClick={() => handleSectionChange("Query")}>
            <span className={`tab-text ${currentSection === "Query" ? "active" : ""}`} onClick={() => setSelectedCategory("Query")}>Query</span>
          </div>
          <div className={`tab ${currentSection === "Support" ? "active" : ""}`} onClick={() => handleSectionChange("Support")}>
            <span className={`tab-text ${currentSection === "Support" ? "active" : ""}`} onClick={() => setSelectedCategory("Support")}>Support</span>
          </div>
        </div>
      </div>

      {/* Tickets List */}
      <div className="scrollable-tickets">
        {filterTickets().map((ticket, index) => (
          <div className="border-custom" key={index}>
            <div className="d-flex sm-flex justify-content-between me-3 ms-4 mt-4">
              <div className="d-flex sm-flex gap-3 ">
                <h6>{`Ticket # ${ticket.ticketNumber}`}</h6>
                <button
                  className={`btn-complain ${
                    ticket.status === "Complain"
                      ? "status-complain"
                      : ticket.status === "Query"
                      ? "status-query"
                      : "status-support"
                  }`}
                >
                  {ticket.status}
                </button>
              </div>
              <div>
                <span>{`Created at ${ticket.createdAt}`}</span>
              </div>
            </div>
            <div className="border-top ms-4 me-3">{ticket.description}</div>
            <div className="d-flex sm-flex justify-content-between me-3 ms-4 mb-2">
              <h6>{`Ticket Status: ${ticket.ticketStatus}`}</h6>
              <button
                type="button"
                className="btn-view"
                onClick={() => handleViewDetail(ticket)}
              >
                View Detail
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedTicket && (
        <Popup ticket={selectedTicket} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default SupportTicket;

