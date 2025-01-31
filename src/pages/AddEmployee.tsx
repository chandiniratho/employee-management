import React from "react";
import { useForm } from "react-hook-form";
import { useEmployeeContext } from "../context/EmployeeContext";
import { useNavigate } from "react-router-dom";

type FormValues = {
  name: string;
  department: string;
  position: string;
};

const AddEmployee: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const { addEmployee } = useEmployeeContext();
  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    addEmployee({ id: Date.now(), ...data });
    reset();
    navigate("/");
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">Add Employee</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <input {...register("name")} placeholder="Name" className="border p-2 block w-full mb-2" required />
        <input {...register("department")} placeholder="Department" className="border p-2 block w-full mb-2" required />
        <input {...register("position")} placeholder="Position" className="border p-2 block w-full mb-2" required />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
