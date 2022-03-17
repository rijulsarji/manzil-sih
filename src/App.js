import React from "react";
import {Routes, Route} from "react-router-dom";

// data insert pages
import InsertJobs from "./InsertData/insertJobs";
import InsertNGOs from "./InsertData/insertNGOs";
import InsertProducts from "./InsertData/insertProducts";
import InsertScholarships from "./InsertData/insertScholarships";

// pages
import LandingPage from "./Pages/landingPage";
import DataInput from "./Pages/dataInput";
import User from "./User";

function App() {

  return (
    <div className="appBody">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user/*" element={<User />} />
        <Route path="/ngo/dataInput" element={<DataInput />} />
        <Route path="/api/jobs" element={<InsertJobs />} />
        <Route path="/api/scholarships" element={<InsertScholarships />} />
        <Route path="/api/NGOs" element={<InsertNGOs />} />
        <Route path="/api/products" element={<InsertProducts />} />
      </Routes>
    </div>
  );
}

export default App;