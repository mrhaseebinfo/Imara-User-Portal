import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./Pages/Login/Login";
import Welcome from "./Pages/Dashboard/Welcome";
import Support from "./Pages/Support/Support";
import Events from "./Pages/Events/Event";
import MyInvestment from "./Pages/My Investment/MyInvestment";
import Layout from "./Components/Layout/Layout"; 
import "./App.css";
import ImaratProjectDetails from "./Pages/ImaratProjectDetails/ImaratProjectDetails";
import Profile from "./Pages/Profile/Profile";
import EditProfile from "./Pages/Profile/EditProfile/EditProfile";


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/layout"
          element={
            <Layout
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
            />
          }
        >
          <Route path="dashboard" element={<Welcome/>} />
          <Route path="investment" element={<MyInvestment />} />
          <Route path="support" element={<Support />} />
          <Route path="events" element={<Events />} />
          <Route path="profile" element={<Profile/>} />
          <Route path="editprofile" element={<EditProfile/>} />
          
          


          <Route path="investment/:projectId" element={<ImaratProjectDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
