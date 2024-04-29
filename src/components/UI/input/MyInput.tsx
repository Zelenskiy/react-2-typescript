import React from 'react';
import { InputHTMLAttributes, forwardRef } from "react";
import classes from './MyInput.module.css';

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const MyInput = forwardRef<HTMLInputElement, MyInputProps>((props, ref) => {
  return <input ref={ref} className={classes.myInput} {...props} />;
});

MyInput.displayName = 'MyInput';

export default MyInput;
