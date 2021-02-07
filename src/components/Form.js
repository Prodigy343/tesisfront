import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from '@material-ui/core';

export const Form = ({ 
    structure, 
    submitData, onSubmitCallback, 
    values, setValues,
    submitText, submitProps,
    children
  }) => {

  const [errorStates, setErrorStates] = useState(() => {
    const initialErrors = {};
    Object.keys(structure).forEach(key => {
      initialErrors[key] = false;
    });
    return initialErrors;
  });

  const handleChange = (prop) => (event) => {
    verifyError(prop, event.target.value);
    setValues(prev => ({ ...prev, [prop]: event.target.value }));
  };

  const verifyError = (prop, value) => {
    const types = Object.keys(structure[prop].constraints);
    let error;

    types.every(key => {
      const regexKey = /regex\d$/;

      switch (true) {
        case key === 'required':
          error = value.length === 0;
          setErrorStates({ ...errorStates, [prop]: error ? key : null });
          break;

        case regexKey.test(key):
          error = !structure[prop].constraints[key].test(value);
          setErrorStates({ ...errorStates, [prop]: error ? key : null });
          break;

        default:
          break;
      }

      return error ? false:true;
    });
  }

  const inputs = Object.keys(structure).map(key => {
    return <Input 
      id={key}
      key={key}
      {...structure[key]} 
      value={values[key]}
      errorState={errorStates[key]}
      onBlur={handleChange(key)}
      onChange={handleChange(key)}
    />;
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const validForm = Object.keys(errorStates).every(key => errorStates[key] === null);
    if(validForm){
      console.log("valid");
    }else{
      console.log("invalid");
    }
  }

  return (
    <form onSubmit={ onSubmit }> 
      { inputs }
      <Button type="submit" {...submitProps}>
          { submitText }
      </Button>
      {children}
    </form>
  )
}
