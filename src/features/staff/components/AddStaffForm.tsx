import React from "react";
import { type StaffFormData, StaffSchema } from "../models/StaffSchema";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useCreate } from "../../../Hooks";
import { createStaff } from "../../../api";

interface AddStaffFormProps {
  onCreated: () => void;
}

export const AddStaffForm: React.FC<AddStaffFormProps> = ({onCreated}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StaffFormData>({
    resolver: zodResolver(StaffSchema),
  });

const create = useCreate(createStaff, "Staff", onCreated)


return (
  <form
    onSubmit={handleSubmit(async (data : StaffFormData) => {
      await create(data, reset)
    })}
    className="bg-slate-800/60 backdrop-blur p-6 rounded-xl border border-slate-700/50 shadow-lg max-w-2xl"
  >
    <h2 className="text-xl text-cyan-100 mb-4">Add New Staff</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-slate-200 mb-1">First Name</label>
        <input
          {...register("firstName")}
          className="w-full p-2 rounded bg-slate-700 text-slate-100"
        />
        {errors.firstName && (
          <p className="text-red-400 text-sm">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <label className="block text-slate-200 mb-1">Last Name</label>
        <input
          {...register("lastName")}
          className="w-full p-2 rounded bg-slate-700 text-slate-100"
        />
        {errors.lastName && (
          <p className="text-red-400 text-sm">{errors.lastName.message}</p>
        )}
      </div>

      <div>
        <label className="block text-slate-200 mb-1">Mobile Number</label>
        <input
          {...register("mobileNumber")}
          className="w-full p-2 rounded bg-slate-700 text-slate-100"
        />
        {errors.mobileNumber && (
          <p className="text-red-400 text-sm">{errors.mobileNumber.message}</p>
        )}
      </div>

      <div>
        <label className="block text-slate-200 mb-1">Email</label>
        <input
          {...register("email")}
          className="w-full p-2 rounded bg-slate-700 text-slate-100"
        />
        {errors.email && (
          <p className="text-red-400 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-slate-200 mb-1">Password</label>
        <input
          {...register("password")}
          className="w-full p-2 rounded bg-slate-700 text-slate-100"
        />
        {errors.password && (
          <p className="text-red-400 text-sm">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label className="block text-slate-200 mb-1">Address</label>
        <input
          {...register("Address")}
          className="w-full p-2 rounded bg-slate-700 text-slate-100"
        />
        {errors.Address && (
          <p className="text-red-400 text-sm">{errors.Address.message}</p>
        )}
      </div>

      <div>
        <label className="block text-slate-200 mb-1">City</label>
        <input
          {...register("city")}
          className="w-full p-2 rounded bg-slate-700 text-slate-100"
        />
        {errors.city && (
          <p className="text-red-400 text-sm">{errors.city.message}</p>
        )}
      </div>

      <div>
        <label className="block text-slate-200 mb-1">Role</label>
        <input
          {...register("role")}
          className="w-full p-2 rounded bg-slate-700 text-slate-100"
        />
        {errors.role && (
          <p className="text-red-400 text-sm">{errors.role.message}</p>
        )}
      </div>
    </div>

    <button
      type="submit"
      className="mt-6 px-4 py-2 rounded bg-[#511D43] text-white hover:bg-[#6a2658] border border-[#511D43] hover:border-[#D946EF] transition-all duration-300 shadow hover:shadow-[#D946EF]/40"
    >
      Submit
    </button>
  </form>
);

};
