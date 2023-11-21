import React from "react";
import classes from "./hello.module.css";

export const HelloWorldComponent: React.FC = () => {
  return <h1 className={classes.background}>Hola mundo from React</h1>;
};
