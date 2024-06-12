import React from "react";

interface ResetMobileTs {
  disabled?: boolean,
  mobile: string
  handleInputMobile?: React.ChangeEventHandler<HTMLInputElement>
}
export default function ResetInputMobile({ disabled, mobile, handleInputMobile }: ResetMobileTs) {
  return (
    <input
      disabled={disabled}
      type="date"
      autoComplete="off"
      value={mobile}
      name="Name"
      onChange={handleInputMobile}
      placeholder="Date of Birth"
    />
  );
}
