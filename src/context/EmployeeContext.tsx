import React, { createContext, useContext, useState, ReactNode } from "react";

// Define Employee Type
type Employee = {
  id: number;
  name: string;
  department: string;
  position: string;
};

// Define Context Type
type EmployeeContextType = {
  employees: Employee[];
  addEmployee: (employee: Employee) => void;
  editEmployee: (updatedEmployee: Employee) => void;
  deleteEmployee: (id: number) => void;
};

// Create Context
const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined);

export const EmployeeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const addEmployee = (employee: Employee) => setEmployees([...employees, { ...employee, id: Date.now() }]);
  const editEmployee = (updatedEmployee: Employee) => setEmployees(employees.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp));
  const deleteEmployee = (id: number) => setEmployees(employees.filter(emp => emp.id !== id));

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee, editEmployee, deleteEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

// Custom Hook
export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error("useEmployeeContext must be used within an EmployeeProvider");
  }
  return context;
};
