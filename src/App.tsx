import React from "react";
import { EmployeeProvider } from "./context/EmployeeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import './styles/styles.css';  // Make sure the path is correct

const App: React.FC = () => {
  return (
    <EmployeeProvider>
      {/* Wrap Router with basename to handle GitHub Pages routing */}
      <Router basename="/employee-management">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
        </Routes>
      </Router>
    </EmployeeProvider>
  );
};

export default App;
