import React from "react";

interface InputTs {
  disabled?: boolean;
  type: "date" | "text";
  value: string | number;
  name: "name" | "address" | "date of birth" | "email" | "home" | "mobile";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
function InputForm({ disabled, type, value, onChange }: InputTs) {
  return (
    <input
      disabled={disabled}
      type={type}
      autoComplete="off"
      value={value}
      name="Name" // dựa vào type để hiển thị đúng name
      onChange={onChange}
      placeholder="First"
    />
  );
}

export default InputForm;
