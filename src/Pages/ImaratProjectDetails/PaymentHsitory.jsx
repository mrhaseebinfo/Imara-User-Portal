import "./PaymentHistory.css";
import { useEffect } from "react";
import { paymentData } from "../../assets/Data/Data.js"; 
import Scrollbar from "smooth-scrollbar";
import { useParams } from "react-router-dom";

const PaymentHistory = () => {
  useEffect(() => {
    const mainScrollbar = Scrollbar.init(
      document.querySelector(".table-container")
    );

    return () => {
      if (mainScrollbar) mainScrollbar.destroy();
    };
  }, []);

  const { projectId } = useParams(); 
  const paymentDataData = paymentData[projectId]; 

  if (!paymentDataData) {
    return <div>Project not found</div>;
  }

  return (
    <div className="payment child-bg">
      <div className="p-3 pb-1">
        <h6 className="fs-4 fw-bold">Payment History</h6>
      </div>
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr className="header-custom text-center">
              <th>TRAN ID</th>
              <th>NAME</th>
              <th>P.TYPE</th>
              <th>SERVICE</th>
              <th>AMOUNT</th>
              <th>PAYMENT DATE</th>
              <th>STATUS</th>
              <th>BANK NAME</th>
              <th>NOTES 1</th>
              <th>NOTES 2</th>
            </tr>
          </thead>
          <tbody className="tbody-custom">
            {paymentDataData.map((pymtData) => (
              <tr key={pymtData.id} className="detail-custom">
                <td>{pymtData.id}</td>
                <td>{pymtData.name}</td>
                <td>{pymtData.paymentType}</td>
                <td>{pymtData.service}</td>
                <td>{pymtData.amount}</td>
                <td>{pymtData.date}</td>
                <td>
                  <button
                    className={`btn-investment ${
                      pymtData.status === "Complete"
                        ? "status-complete"
                        : pymtData.status === "Inprogress"
                        ? "status-inprogress"
                        : "status-pending"
                    }`}
                  >
                    {pymtData.status}
                  </button>
                </td>
                <td>{pymtData.bank}</td>
                <td>{pymtData.notes1}</td>
                <td>{pymtData.notes2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
