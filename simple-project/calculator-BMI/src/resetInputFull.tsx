import { SyntheticEvent } from "react";

interface IInputForm {
  disabled?: boolean;
  type: string;
  value: string | number;
  onCHange: (e: SyntheticEvent) => void;
}
function ResetInputFull({ disabled, type, value, onCHange }: IInputForm) {
  return (
    <input
      disabled={disabled}
      type={type}
      autoComplete="off"
      value={value}
      name="Name" // dựa vào type để hiển thị đúng name
      onChange={onCHange}
      placeholder="First"
    />
  );
}

export default ResetInputFull;
