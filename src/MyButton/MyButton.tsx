import * as React from "react";
import "./MyButton.css";
import { useEffect } from "react";

export type sizeProps = "small" | "medium" | "large";

export interface MyButtonProps {
  bgcolor?: string;
  size?: sizeProps;
  children: React.ReactNode;
}

const MyButton: React.FC<MyButtonProps> = ({
  children,
  size,
  bgcolor,
  ...props
}) => {
  return (
    <button
      {...props}
      style={{
        background: bgcolor,
      }}
      className={["btn", size].join(" ")}
    >
      {children}
    </button>
  );
};

export default MyButton;
