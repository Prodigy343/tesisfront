import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, FormControl, Paper, Button, Input, InputLabel } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import ciensLogo from '../assets/ciens.png';

export const Signup = () => {
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

  const [values, setValues] = useState({
    email: '',
    phone: '',
    id: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
  });

  const [errorStates, setErrorStates] = useState({
    email: null,
    phone: null,
    id: null,
    password: null,
    confirmPassword: null,
  });

  useEffect(() => {
    setErrorStates(
      prevErrorStates => ({
        ...prevErrorStates, 
        'confirmPassword':  values.confirmPassword !== values.password ? 'confirm' : null 
      })
    );
  }, [values.confirmPassword, values.password]);

  const verifyError = (prop, value) => {
    const types = Object.keys(formStructure[prop].errors);
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
          error = !formStructure[prop].constraints[key].test(value);
          setErrorStates({ ...errorStates, [prop]: error ? key : null });
          break;

        default:
          break;
      }

      return error ? false:true ;
    });
  }

  const handleChange = (prop) => (event) => {
    verifyError(prop, event.target.value);
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  

  return (
    <Paper className="paper-form login-form">
      <img className="logo" src={ciensLogo} alt=""/>
      <form>
        <FormControl className={`container-form ${errorStates.email?'ext-error':''}`} noValidate autoComplete="off">
          <TextField required id="email" value={values.email} onChange={handleChange('email')} onBlur={handleChange('email')} label="Correo Electrónico" />
          <div className="ext-error">{formStructure.email.errors[errorStates.email]}</div>
        </FormControl>
        <FormControl className={`container-form ${errorStates.phone?'ext-error':''}`} noValidate autoComplete="off">
          <TextField required id="phone" value={values.phone} onChange={handleChange('phone')} onBlur={handleChange('phone')} label="Numero Telefónico" />
          <div className="ext-error">{formStructure.phone.errors[errorStates.phone]}</div>
        </FormControl>
        <FormControl className={`container-form ${errorStates.id?'ext-error':''}`} noValidate autoComplete="off">
          <TextField required id="id" value={values.id} onChange={handleChange('id')} onBlur={handleChange('id')} label="Cedula de Identidad" />
          <div className="ext-error">{formStructure.id.errors[errorStates.id]}</div>
        </FormControl>
        <FormControl className={`container-form ${errorStates.password?'ext-error':''}`} noValidate autoComplete="off">
          <InputLabel htmlFor="ext-password">
            Password
            <span aria-hidden="true" className="MuiFormLabel-asterisk MuiInputLabel-asterisk"> *</span>  
          </InputLabel>
          <Input
            required
            id="ext-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            onBlur={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <div className="ext-error">{formStructure.password.errors[errorStates.password]}</div>
        </FormControl>
        <FormControl className={`container-form ${errorStates.confirmPassword?'ext-error':''}`} noValidate autoComplete="off">
          <InputLabel htmlFor="ext-confirm-password">
            Confirm Password
            <span aria-hidden="true" className="MuiFormLabel-asterisk MuiInputLabel-asterisk"> *</span>
          </InputLabel>
          <Input 
            required
            id="ext-confirm-password"
            type='password'
            value={values.confirmPassword}
            onChange={handleChange('confirmPassword')}
            onBlur={handleChange('confirmPassword')}
          />
          <div className="ext-error">{formStructure.confirmPassword.errors[errorStates.confirmPassword]}</div>
        </FormControl>
        <Button className="send-btn" variant="contained" color="primary">
            Registrarse
        </Button>
        <Link className="default-link" to='/'>Iniciar sesión</Link>
      </form>
    </Paper>
  )
};
