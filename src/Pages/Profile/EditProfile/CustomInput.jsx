/* eslint-disable react/prop-types */
const CustomInput = ({ placeholder, id }) => {
  return (
    <div className="col-md-6 mb-3">
      <input
        type="text"
        className="form-control"
        id={id}
        placeholder={placeholder}
        onFocus={(e) => {
          e.target.style.outline = "none"; 
          e.target.style.backgroundColor = "transparent"; 
          e.target.style.boxShadow = "none"; 
          
        }}
        onBlur={(e) => {
          e.target.style.backgroundColor = "transparent"; 
          e.target.style.borderColor = "#ced4da"; 
        }}
        style={{
          color:'#000',
          backgroundColor: "transparent", 
          borderColor: "#24232366",
          border:'2px solid #24232366',
        }}
      />
    </div>
  );
};

export default CustomInput;
