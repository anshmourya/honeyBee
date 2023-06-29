const InputFeild = ({ type, onchangeFunction, inputStyle, value }) => {
  return (
    <input
      type={type}
      onChange={onchangeFunction}
      className={inputStyle}
      value={value}
    />
  );
};

export default InputFeild;
