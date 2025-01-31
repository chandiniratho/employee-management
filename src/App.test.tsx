import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Ensure this import is here
import { BrowserRouter } from "react-router-dom";
import { EmployeeProvider } from "./context/EmployeeContext";
import App from "./App";

test("renders Employee Management heading", () => {
  render(
    <EmployeeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </EmployeeProvider>
  );

  const headingElement = screen.getByText(/Employee Management/i);
  expect(headingElement).toBeInTheDocument(); // This should now work
});
