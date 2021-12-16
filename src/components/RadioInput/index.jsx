import { RadioStyle } from "./styles";

const RadioInput = ({ name, register, id, label, value, ...rest }) => {
  return (
    <>
      <RadioStyle
        type="radio"
        id={id}
        name={name}
        value={value}
        {...register(name)}
        {...rest}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
};
export default RadioInput;
