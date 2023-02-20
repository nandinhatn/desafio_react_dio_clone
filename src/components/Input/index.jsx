import React from 'react'
import {InputContainer, InputText,IconContainer, ErrorText} from './styles'
import {  Controller } from "react-hook-form";
const Input=({leftIcon, control, name,errorMessage, ...rest})=> {
  return (
 <InputContainer>
 <IconContainer>{leftIcon}</IconContainer>
 <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <InputText {...field} {...rest}/>}
      />
{errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
 </InputContainer>


  )
}
export {Input}
