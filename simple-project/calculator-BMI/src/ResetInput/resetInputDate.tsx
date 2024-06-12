import React from "react";

interface ResetDateTs {
  disabled? : boolean,
  date: string
  handleInputDate?: React.ChangeEventHandler<HTMLInputElement>
}
export default function ResetInputDate({disabled, date,handleInputDate } : ResetDateTs) {
  return ( 
    <input
    disabled={disabled}
    type="date"
    autoComplete="off"
    value={date}
    name="Date"
    onChange={handleInputDate}
    placeholder="Date of Birth"
  />
   );
}
