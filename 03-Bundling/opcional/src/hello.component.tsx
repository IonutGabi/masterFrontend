import React from "react";
import classes from "./hello.module.scss";

export const HelloComponent: React.FC = () => {
  return <h1 className={classes.headerStyles}>Hola mundo desde React!</h1>;
};
