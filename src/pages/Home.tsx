import React from "react";
import { useEmployeeContext } from "../context/EmployeeContext";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { employees, deleteEmployee } = useEmployeeContext();

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">Employee Management</h2>
      <Link to="/add" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-3 inline-block">
        Add Employee
      </Link>
      <table className="w-full mt-5 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Department</th>
            <th className="border p-2">Position</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td className="border p-2">{emp.name}</td>
              <td className="border p-2">{emp.department}</td>
              <td className="border p-2">{emp.position}</td>
              <td className="border p-2">
                <Link to={`/edit/${emp.id}`} className="text-blue-500 mr-3">Edit</Link>
                <button onClick={() => deleteEmployee(emp.id)} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
