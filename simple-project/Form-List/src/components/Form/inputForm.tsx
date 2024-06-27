interface InputTs {
  onChangeInput?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function InputForm({ onChangeInput }: InputTs) {
  return (
    <input type="text" name="" onChange={onChangeInput} id="" />
  );
}
