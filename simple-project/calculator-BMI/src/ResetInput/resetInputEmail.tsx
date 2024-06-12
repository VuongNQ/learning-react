import React from "react";

interface ResetEmailTs {
  disabled?: boolean
  email?: string
  handleInputEmail?: React.ChangeEventHandler<HTMLInputElement> 
}

export default function ResetInputEmail({ disabled, email, handleInputEmail }: ResetEmailTs) {
  return ( 
    <input
        disabled={disabled}
        type="text"
        autoComplete="off"
        value={email}
        name="email"
        onChange={handleInputEmail}
        placeholder="Email"
      />
   );
}
