import React, { useEffect, useState } from "react";
import styles from "./InputField.module.css";
import { USDollar } from "../utils/amountFormater";

type InputProps = {
  type?:
    | "text"
    | "number"
    | "select"
    | "radio"
    | "checkbox"
    | "password"
    | "currency";
  prefilledValue?: string;
  inputStyle?: object;
  inputTitle?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  labelStyle?: object;
  errorMessage?: string;
  error: boolean;
  maxLength?: number;
  minLength?: number;
  options?: Array<{
    id: string;
    name: string;
    value: string;
  }>;
  regex?: string;
  customChangeFunction: (val: string) => void;
};

const InputField: React.FC<InputProps> = ({
  type = "text",
  prefilledValue,
  inputStyle,
  inputTitle = "",
  required = false,
  disabled = false,
  placeholder,
  labelStyle,
  errorMessage,
  error = false,
  maxLength,
  minLength,
  options,
  regex,
  customChangeFunction,
}) => {
  const [inputValue, setInputValue] = useState<string | number>();

  useEffect(() => {
    if (prefilledValue) setInputValue(prefilledValue);
  });

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={inputTitle} style={labelStyle}>
        {inputTitle}
      </label>
      {type === "select" ? (
        <>
          <select>
            {options?.map((option) => (
              <option id={option.id} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </>
      ) : (
        <input
          value={inputValue}
          type={type}
          name={inputTitle}
          placeholder={placeholder}
          required={required}
          maxLength={maxLength}
          minLength={minLength}
          disabled={disabled}
          pattern={regex}
          style={inputStyle}
          onChange={(e) => {
            setInputValue(e.target.value);
            customChangeFunction(e.target.value);
          }}
        />
      )}
      {error && <div className={styles.error}>{errorMessage}</div>}
      {type === "currency" && inputValue && (
        <div>{USDollar.format(Number(inputValue))}</div>
      )}
    </div>
  );
};
export default InputField;
