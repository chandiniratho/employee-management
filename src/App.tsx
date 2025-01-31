import React from "react";
import { EmployeeProvider } from "./context/EmployeeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import './styles/styles.css';  // Adjust the path based on where you put it

const App: React.FC = () => {
  return (
    <EmployeeProvider>
      <Router>
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