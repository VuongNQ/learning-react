import React from "react";

interface ResetHomeTs {
  disabled? : boolean,
  home: string
  handleInputHome?: React.ChangeEventHandler<HTMLInputElement>
}
export default function ResetInputHome({disabled, home,handleInputHome } : ResetHomeTs) {
  return ( 
    <input
    disabled={disabled}
    type="date"
    autoComplete="off"
    value={home}
    name="Name"
    onChange={handleInputHome}
    placeholder="Date of Birth"
  />
   );
}
