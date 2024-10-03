import { FaRegFileAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { bookingInformationData, images } from "../../assets/Data/Data.js";
import "./Bookinginfo.css";

const mallImages = [
  images.mall1,
  images.mall2,
  images.mall3,
  images.mall4,
  images.mall5,
  images.mall6,
];

const Bookinginfo = () => {
  const { projectId } = useParams();
  const bookingData = bookingInformationData[projectId];

  if (!bookingData) {
    return <div>Project not found</div>;
  }

  const mallImagesList = mallImages.map((image, index) => (
    <img key={index} src={image} alt={`Mall ${index + 1}`} className="ms-1" />
  ));

  return (
    <div className="booking-info rounded">
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <div className="mb-3">
            <img
              src={bookingData.imageproject}
              alt={bookingData.productName || "Project Image"}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="d-flex flex-wrap gap-3 mb-3">{mallImagesList}</div>
          <div className="mt-4">
            <h6 className="text-secondary">FEATURE TAGS</h6>
            <div className="d-flex flex-wrap gap-2">
              {[
                "#realestate",
                "#amazonmall",
                "#flat",
                "Furnished",
                "Clean",
                "Apartment",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="badge bg-light text-dark p-2 rounded-pill"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Main Content */}
        <div className="col-lg-8 col-md-12">
          <div className="d-flex justify-content-between align-items-center pb-3 mb-3">
            <h5 className="fw-bold">{bookingData.productName}</h5>
            <span className="bg-white text-dark px-3 py-2 fw-bold rounded-pill">
              Installment
            </span>
          </div>

          <h6 className="mb-3">INVESTMENT INFORMATION</h6>
          <div className="row">
            {[
              { label: "Floor Name", value: bookingData.floorName },
              { label: "Sqft/Size", value: bookingData.size },
              { label: "Category Name", value: bookingData.categoryName },
              { label: "Rate Per Sqft", value: bookingData.ratePerSqft },
              { label: "Discount", value: bookingData.discount },
              { label: "Total Unit", value: bookingData.totalUnit },
              { label: "Booking Date", value: bookingData.bookingDate },
              { label: "Product Type", value: bookingData.productType },
            ].map(({ label, value }, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="d-flex justify-content-between border-bottom pb-4">
                  <h6>{label}</h6>
                  <span className="text-primary fw-bold">{value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <h6>CONTRACT DOCUMENTS</h6>
            <div className="d-flex justify-content-between mt-3 border-bottom pb-3">
              <div className="d-flex align-items-center">
                <FaRegFileAlt className="me-2" />
                <span className="text-dark">Token File.pdf</span>
              </div>
              <button className="btn btn-primary">VIEW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookinginfo;
