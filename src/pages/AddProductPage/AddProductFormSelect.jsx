import React from 'react';

const FormSelect = ({ id, name, value, options, onChange, required = false }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
      {name}
    </label>
    <select
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    >
      <option value="">Select {name}</option>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default FormSelect;
