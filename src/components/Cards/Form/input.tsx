import React from 'react';

export default function InputField({checked, type} :any) {
    console.log()
  return (
    <label className="inline-flex items-center ">
      <input type={type} className="form-checkbox h-4 w-4 text-green-[500] rounded-lg" checked={checked}/>
    </label>
  );
}
