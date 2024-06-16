import React from "react";

interface InputTs {
  disabled?: boolean;
  type: "date" | "text";
  value: string | number;
  name: "name" | "address" | "date" | "email" | "home" | "mobile";
  placeholder: "Name" | "Address" | "Date" | "Email" | "Home" | "Mobile";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
function InputForm({ disabled, type, value, onChange,name, placeholder }: InputTs) {
  return (
    <input
      disabled={disabled}
      type={type}
      autoComplete="off"
      value={value}
      name={name} // dựa vào type để hiển thị đúng name
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default InputForm;
