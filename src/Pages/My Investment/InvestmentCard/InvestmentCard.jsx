import { useState } from "react";
import "./InvestmentCard.css";
import { myInvestment } from "../../../assets/Data/Data";

const InvestmentCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentInvestments = myInvestment.slice(startIndex, endIndex);

  const totalPages = Math.ceil(myInvestment.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <div className="container investment-card rounded pt-3 child-bg">
      <div className="row align-items-center justify-content-between ms-4 me-4">
        <div className="col-12 col-md-6 mb-2 mb-md-0 text-white">
          <h2>My Investment</h2>
        </div>

        <div className="col-12 col-md-6 d-flex gap-2 justify-content-end pe-5">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              City
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              All
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="invest-image ms-4">
        {currentInvestments.map((investment) => (
          <div
            className="images-card"
            key={investment.id}
            style={{
              position: "relative",
            }}
          >
            <img
              src={investment.imgSrc}
              className=""
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                objectFit: "cover",
              }}
              alt={investment.name}
            />
            <div
              className=""
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 41.93%, rgba(0, 0, 0, 0.8) 82.46%)",
              }}
            ></div>
            <div
              className="position-absolute d-flex justify-content-between align-items-center w-100"
              style={{
                bottom: "10px",
                left: "10px",
                color: "#fff",
                zIndex: 1,
                padding: "0 10px",
              }}
            >
              <div>
                <h6 className="fs-5">{investment.name}</h6>
                <p className="text-secondary">{investment.producttype}</p>
              </div>
              <div>
                <button
                  className={`me-2 btn-investment ${
                    investment.status === "Complete"
                      ? "status-complete"
                      : investment.status === "Inprogress"
                      ? "status-inprogress"
                      : "status-pending"
                  }`}
                >
                  {investment.status}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center col-md-12 mt-4">
        <ul className="d-flex gap-4 list-unstyled mt-2 justify-content-center text-white">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <a
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </a>
          </li>

          {[...Array(2)].map((_, index) => (
            <li
              key={index + 1}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <a
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}

          {totalPages > 3 && (
            <li className="page-item disabled">
              <a className="page-link">. &nbsp;&nbsp;. &nbsp;&nbsp;.</a>
            </li>
          )}

          {totalPages > 3 && (
            <li
              className={`page-item ${
                currentPage === totalPages ? "active" : ""
              }`}
            >
              <a
                className="page-link"
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </a>
            </li>
          )}

          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <a
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </a>
          </li>
        </ul>
        <div className="ms-4 ">
          <div className="">
            <button
              className="btn border text-black d-none d-md-block dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {itemsPerPage}/Page
            </button>
            <ul className="dropdown-menu">
              {[...Array(totalPages)].map((_, index) => (
                <li key={index + 1}>
                  <a
                    className="dropdown-item"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    Page {index + 1}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard;
