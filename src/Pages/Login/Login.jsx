import { images } from "../../assets/Data/Data";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(44, 67, 81, 0.1) 0%, #2C4351 100%), url(${images.bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      
      }}
    >
      <div className=" custom-container d-flex flex-column align-items-center justify-content-center"> 
        <img src={images.log} alt="logo"  className=" mb-4 "/>
        <div>
          <LoginForm/>
        </div>
      </div>
    </div>
  );
};

export default Login;
