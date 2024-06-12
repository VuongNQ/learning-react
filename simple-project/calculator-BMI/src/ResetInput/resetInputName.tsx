interface ResetNameTs {
  disabled?: boolean
  name?: string
  handleInput?: React.ChangeEventHandler<HTMLInputElement>
} 

export default function ResetInputName({disabled, name, handleInput } : ResetNameTs) {
  return (
    <input
      disabled={disabled}
      type="text"
      autoComplete="off"
      value={name}
      name="Name"
      onChange={handleInput}
      placeholder="First"
    />
  );
}
