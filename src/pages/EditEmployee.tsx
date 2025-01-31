import React from "react";
import { useForm } from "react-hook-form";
import { useEmployeeContext } from "../context/EmployeeContext";
import { useNavigate, useParams } from "react-router-dom";

type FormValues = {
  name: string;
  department: string;
  position: string;
};

const EditEmployee: React.FC = () => {
  const { employees, editEmployee } = useEmployeeContext();
  const { id } = useParams<{ id: string }>();
  const employee = employees.find(emp => emp.id === Number(id));
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: employee || { name: "", department: "", position: "" }
  });

  const onSubmit = (data: FormValues) => {
    if (employee) {
      editEmployee({ ...employee, ...data });
      navigate("/");
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">Edit Employee</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <input {...register("name")} className="border p-2 block w-full mb-2" required />
        <input {...register("department")} className="border p-2 block w-full mb-2" required />
        <input {...register("position")} className="border p-2 block w-full mb-2" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Update</button>
      </form>
    </div>
  );
};

export default EditEmployee;
