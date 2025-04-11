import React from 'react';

type InputProps = {
  label: string;
  type?: string;
  name: string;
  register: any;
  error?: string | React.ReactNode;
};

const Input: React.FC<InputProps> = ({ label, type = "text", name, register, error }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      {...register(name)}
      type={type}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

export default Input;
