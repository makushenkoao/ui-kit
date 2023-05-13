import * as React from "react";
import { sizeProps } from "../MyButton/MyButton";

export interface MyInputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  size?: sizeProps;
}

const MyInput: React.FC<MyInputProps> = ({
  label,
  size,
  placeholder,
  type,
  ...rest
}) => {
  return (
    <label>
      {label && label}
      <input
        placeholder={placeholder}
        type={type}
        className={["input", size].join(" ")}
        {...rest}
      />
    </label>
  );
};

export default MyInput;
