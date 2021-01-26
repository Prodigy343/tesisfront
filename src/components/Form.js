import React, { useEffect, useState } from 'react';
import { Input } from './Input';

export const Form = ({ 
    structure, 
    onSubmitCallback, 
    values, setValues,
    submitText, submitProps,
    children
  }) => {

  useEffect(() => {
    console.log(structure);
    console.log(stateObject);
    console.log(submitText);
  }, []);

  const formStructure = {
    email:{
      type: 'email',
      constraints: {
        required: true,
        regex1: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
      },
      errors: {
        required: 'El campo correo es requerido',
        regex1: 'El correo no tiene un formato válido'
      }
    },
    phone:{
      type: 'text',
      label: ,
      constraints: {
        required: true,
      },
      errors: {
        required: 'El campo teléfono es requerido',
      }
    },
    id:{
      type: 'id',
      constraints: {
        required: true,
      },
      errors: {
        required: 'El campo cédula es requerido',
      }
    },
    password:{
      type: 'password',
      constraints: {
        required: true,
      },
      errors: {
        required: 'El campo contraseña es requerido',
      }
    },
    confirmPassword:{
      type: 'confirm',
      constraints: {
        required: true,
        confirm: 'password'
      },
      errors: {
        required: 'Es necesario que confirme su contraseña',
        confirm: 'La contraseña no coincide',
      }
    }
  };

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

        case key === 'confirm':
          const target = prop.toLowerCase().replace('confirm', '');
          error = value !== values[target];
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
    return 
      <Input 
        id={key} 
        {...structure[key]} 
        value={values[key]}
        errorState={errorStates[key]}
        onBlur={handleChange(key)}
        onChange={handleChange(key)}
      />;
  });

  return (
    <form onSubmit={onSubmitCallback}> 
      { inputs }
      <Button type="submit" {...submitProps}>
          { submitText }
      </Button>
      {...children}
    </form>
  )
}
