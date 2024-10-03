/* eslint-disable react/prop-types */
const RadioGroup = ({ title, name }) => {
  return (
    <div className="d-flex mb-3">
      <span className="me-3 fs-5">{title}</span>
      <div className="form-check  me-3">
        <input
          className="form-check-input radio "
          type="radio"
          name={name}
          id={`${name}Yes`}
        />
        <label className="form-check-label" htmlFor={`${name}Yes`}>
          Yes
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input radio"
          type="radio"
          name={name}
          id={`${name}No`}
        />
        <label className="form-check-label" htmlFor={`${name}No`}>
          No
        </label>
      </div>
    </div>
  );
};

export default RadioGroup;
