interface ResetData {
  disabled?: boolean,
  name: string
  date: string
  email: string
  home: string
  mobile: string
  address: string
  handleInput?: React.ChangeEventHandler<HTMLInputElement>
  handleInputEmail?: React.ChangeEventHandler<HTMLInputElement>
  handleInputHome?: React.ChangeEventHandler<HTMLInputElement>
  handleInputMobile?: React.ChangeEventHandler<HTMLInputElement>
  handleInputDate?: React.ChangeEventHandler<HTMLInputElement>
  handleInputAddress?: React.ChangeEventHandler<HTMLInputElement>
}

function ResetInputFull({
  disabled, name, date, email, home, mobile, address, handleInput, handleInputDate, handleInputEmail, handleInputHome, handleInputMobile, handleInputAddress
}: ResetData) {
  return (
    <>
      <input
        disabled={disabled}
        type="text"
        autoComplete="off"
        value={name}
        name="Name"
        onChange={handleInput}
        placeholder="First"
      />
      <input
        disabled={disabled}
        type="date"
        autoComplete="off"
        value={date}
        name="Date"
        onChange={handleInputDate}
        placeholder="Date of Birth"
      />
      <input
        disabled={disabled}
        type="text"
        autoComplete="off"
        value={email}
        name="email"
        onChange={handleInputEmail}
        placeholder="Email"
      />
      <input
        disabled={disabled}
        type="text"
        autoComplete="off"
        value={home}
        name="date"
        onChange={handleInputHome}
        placeholder="Date of Birth"
      />
      <input
        disabled={disabled}
        type="text"
        autoComplete="off"
        value={mobile}
        name="Name"
        onChange={handleInputMobile}
        placeholder="Home telephone Mobile"
      />
      <input
        disabled={disabled}
        type="text"
        autoComplete="off"
        value={address}
        name="Name"
        onChange={handleInputAddress}
        placeholder="Address"

        
      />
    </>
  );
}

export default ResetInputFull;