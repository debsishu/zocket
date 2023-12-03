import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Nav from "./components/nav/Nav";
import Dashboard from "./pages/Dashboard";
import { useEffect, useState } from "react";
import axios from "axios";
import NewCampaign from "./pages/NewCampaign";
import ChooseProduct from "./pages/ChooseProduct";
import CampaignSettings from "./pages/CampaignSettings";
import ReadyToGo from "./pages/ReadyToGo";
import UserSelections from "./context/UserSelections";

function App() {
  const [userDetails, setUserDetails] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchUserData();
  }, []);

  async function fetchUserData() {
    setLoading(true);
    const { data: userData } = await axios.get(
      "https://zocket-api.vercel.app/api/user",
    );
    setUserDetails(userData);
    setLoading(false);
  }

  const defaultValue = {
    name: "",
    image: "",
    createdOn: "",
    startDate: "",
    endDate: "",
    budget: "",
    location: "",
    platform: "",
  };

  return (
    <UserSelections.Provider value={defaultValue}>
      <Router>
        <div className="flex h-screen">
          <Sidebar />
          <div className="h-screen w-full overflow-y-auto bg-background">
            <Nav userData={userDetails} isLoading={loading} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/new-campaign" element={<NewCampaign />} />
              <Route path="/choose-product" element={<ChooseProduct />} />
              <Route path="/campaign-settings" element={<CampaignSettings />} />
              <Route path="/ready-to-go" element={<ReadyToGo />} />
            </Routes>
          </div>
        </div>
      </Router>
    </UserSelections.Provider>
  );
}

export default App;
