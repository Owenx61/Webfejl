import React from "react";
interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "warning" | "light";
  onClick: () => void;
}

function Buttton({ children, onClick, color = "primary" }: Props) {
  return (
    <button className={"btn btn-" + color + " mx-2" } onClick={onClick}>
      {children}
    </button>
  );
}

export default Buttton;
