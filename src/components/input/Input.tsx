import React, { forwardRef, useRef, useState } from 'react';
import { mergeRefs } from '../../utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  type?: "text" | "password" | "email" | "url" | "number";
  defaultValue?: string | number;
  value?: string | number;
  icon?: React.ElementType | React.JSXElementConstructor<any>;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  status?: ['warning', 'error', ''];
  bordered?: boolean;
  onBlur?: ()=>{} | void
  onFocus?: ()=>{} | void
  onChange?: ()=>{} | void
}


 

const Input = forwardRef<HTMLInputElement, InputProps>((props,ref) => {
    const {
        value,
        defaultValue,
        type,
        placeholder = "Type...",
        icon,
        bordered = true,
        disabled=false,
        onBlur,
        onFocus,
        onChange,
        className,
        style,
        error = false,
        errorMessage = "",
        ...rest
      } = props;


      const [isFocused, setIsFocused] = useState(false);

  const Icon = icon;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocusChange = (isFocused: boolean) => {
    if (isFocused === false) {
      inputRef.current?.blur();
    } else {
      inputRef.current?.focus();
    }
    setIsFocused(isFocused);
  };
  return (
    <>
    <div 
    onClick={() => {
      if (!disabled) {
        handleFocusChange(true);
      }
    }}
    onFocus={() => {
      handleFocusChange(true);
    }}
    onBlur={() => {
      handleFocusChange(false);
    }}
    className="relative w-full flex items-center min-w-[10rem] outline-none rounded-tremor-default">
        <div 

        className="absolute inset-y-0 left-0 rtl:right-0 flex items-center pl-3 rtl:pr-3 pointer-events-none">
            {Icon ? (<span><Icon /></span>) : null}
        </div>
    
        <input 
        ref={mergeRefs([inputRef,ref])}
        defaultValue={defaultValue}
        value={value}
        type={type}  
        id="password" 
        placeholder={placeholder} 
        className={`block w-full ${className}`}
        {...rest}
        />
    </div>
    {error && errorMessage ? (
        <p
          className={`text-sm text-rose-500 mt-1`}
        >
          {errorMessage}
        </p>
      ) : null}
    </>
  )
})

export default Input