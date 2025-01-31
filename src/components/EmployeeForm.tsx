import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface EmployeeFormProps {
  onSubmit: (employee: { name: string; department: string; position: string }) => void;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, department, position });
    navigate("/");
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;
