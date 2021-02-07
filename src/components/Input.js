import React, { useState } from 'react';
import { TextField, FormControl, Input as MaterialInput, InputLabel } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';

export const Input = ({type, ...props}) => {
  
  const {id, key, label, errors, constraints, errorState, ...attr} = props;

  const [ showPassword, setShowPassword ] = useState(false);

  const [ confirmField, setConfirmField ] = useState("");

  const [ confirmFieldError, setConfirmFieldError ] = useState(false);

  const confirmChange = (event) => {
    setConfirmFieldError( attr.value !== event.target.value ? true : false );
    setConfirmField(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  switch (type) {
    case 'text':
      return (
        <FormControl className={`container-form ${errorState?'ext-error':''}`}>
          <TextField {...attr} label={label}/>
          <div className="ext-error">
            {errors[errorState]}
          </div>
        </FormControl>
      );

    case 'password':
      const { confirm, ...rest } = attr;

      return (
        <>
          <FormControl className={`container-form ${errorState?'ext-error':''}`}>
            <InputLabel htmlFor="ext-password">
              { label }
              { constraints?.required === true &&
                <span aria-hidden="true" className="MuiFormLabel-asterisk MuiInputLabel-asterisk"> *</span>
              }
            </InputLabel>
            <MaterialInput
              type={showPassword ? 'text' : 'password'}
              {...rest}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <div className="ext-error">{errors[errorState]}</div>
          </FormControl>
          { confirm &&
            <FormControl className={`container-form ${confirmFieldError?'ext-error':''}`}>
              <InputLabel htmlFor="ext-confirm-password">
                { confirm.label }
                <span aria-hidden="true" className="MuiFormLabel-asterisk MuiInputLabel-asterisk"> *</span>
              </InputLabel>
              <MaterialInput 
                id={`ext-confirm-${attr.id}`}
                type='password'
                value={confirmField}
                onChange={confirmChange}
                onBlur={confirmChange}
              />
              { confirmFieldError === true && 
                <div className="ext-error">{confirm.error}</div>
              }
            </FormControl>
          }
        </>
      );

    default:
      return null;
  }
}
