import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import './AddTicket.css';

function AddTicket() {
  const [showModal, setShowModal] = useState(false);
  const [fileSelected, setFileSelected] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  
  const handleFileChange = (e) => {
    setFileSelected(e.target.files.length > 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submit logic here
    console.log("Form submitted");
    handleClose(); // Close modal after submit
  };

  return (
    <div>
      <button type="button" className="btn btn-addt" onClick={handleShow}>
        ADD TICKET
      </button>

      {showModal && (
        <div className="modal show d-block " tabIndex="-1">
          <div className="modal-dialog ">
            <div className="modal-content p-2">
              <div className="modal-header ms-2 me-2 justify-content-between">
                <h5 className="modal-title">Add Ticket</h5>
                <button type="button" className="btn" onClick={handleClose}>
                  <RxCrossCircled className="fs-4"/>
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  {/* Input Fields */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="ticketTitle"
                      placeholder="Ticket Type"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="ticketDescription"
                      rows="3"
                      placeholder="Ticket Details"
                      required
                    ></textarea>
                  </div>

                  {/* File Upload */}
                  <div className="mb-3">
                    <span className="fw-bold">Upload Attachments</span>
                    <div className="border-dotted p-3 mt-3 d-flex">
                      <label htmlFor="fileUpload" className={`custom-file-upload ${fileSelected ? 'file-selected' : ''}`}>
                        {fileSelected ? 'File Selected' : 'Choose File'}
                      </label>
                      <div className="d-flex">
                      <input
                        type="file"
                        id="fileUpload"
                        onChange={handleFileChange} 
                      /> <span className="mt-2 ms-1">no file choosen</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-white border"
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddTicket;
