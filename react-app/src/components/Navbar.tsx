import { ReactNode } from "react";
import foto from "../pict/smalllogo.png";
import Buttton from "./button";

interface Props {
  children: ReactNode;
}

export const Navbar = ({ children }: Props) => {
  function handleSignin() {
    console.log("Sign in");
  }
  return (
    <nav className="navbar navbar-darg bg-dark d-flex justify-content-between">
      <img
        src={foto}
        width="50"
        height="50"
        className="d-inline-block align-top rounded-circle"
        alt=""
      />
      <a className="navbar-brand navbar-dark mx-auto" href="#">
        {children}
      </a>
      <Buttton onClick={handleSignin} color="light">
        Sign in
      </Buttton>
      <Buttton onClick={handleSignin} color="light">
        Register
      </Buttton>
    </nav>
  );
};
