import React from "react";

interface ResetAddressTs {
  disabled? : boolean,
  address: string
  handleInputAddress?: React.ChangeEventHandler<HTMLInputElement>
}
export default function ResetInputAddress({disabled, address,handleInputAddress } : ResetAddressTs) {
  return ( 
    <input
    disabled={disabled}
    type="date"
    autoComplete="off"
    value={address}
    name="Name"
    onChange={handleInputAddress}
    placeholder="Date of Birth"
  />
   );
}
