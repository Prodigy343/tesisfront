import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { Form } from '../components/Form';

export const Signup = () => {
  const structure = {
    email:{
      type: 'text',
      label: 'Correo Electrónico',
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
      label: 'Teléfono',
      constraints: {
        required: true,
      },
      errors: {
        required: 'El campo teléfono es requerido',
      }
    },
    id:{
      type: 'text',
      label: 'Cedula de Identidad',
      constraints: {
        required: true,
      },
      errors: {
        required: 'El campo cédula es requerido',
      }
    },
    password:{
      type: 'password',
      label: 'Contraseña',
      confirm: {
        label: 'Confirmar Contraseña',
        error: 'El campo es distinto al campo contraseña'
      },
      constraints: {
        required: true,
      },
      errors: {
        required: 'El campo contraseña es requerido',
      }
    },
  };

  const [values, setValues] = useState({
    email: '',
    phone: '',
    id: '',
    password: '',
    confirmPassword: '',
  });

  const submitProps = {
    className: "send-btn",
    variant: "contained",
    color: "primary"
  }

  const submitCallback = (e) => {
    e.preventDefault();
    console.log(values);
  }

  return (
    <div className="paper-container">
      <Paper className="paper-form login-form">
        <Form 
          structure={structure} 
          onSubmitCallback={submitCallback} 
          values={values} 
          setValues={setValues}
          submitText="Registrar"
          submitProps={submitProps}
        >
          <Link className="default-link" to='login'>Ya posee una cuenta?</Link>
          <Link className="default-link" to='forgot'>Olvido su contraseña?</Link>
        </Form>
      </Paper>
    </div>
  )
};
