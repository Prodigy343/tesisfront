import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, FormControl, Paper, Button, Input, InputLabel } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import ciensLogo from '../assets/ciens.png';

export const Signup = () => {

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
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
        <FormControl className="container-form" noValidate autoComplete="off">
          <TextField required id="user" label="Correo Electrónico" />
        </FormControl>
        <FormControl className="container-form" noValidate autoComplete="off">
          <TextField required id="phone" label="Numero Telefónico" />
        </FormControl>
        <FormControl className="container-form" noValidate autoComplete="off">
          <TextField required id="id" label="Cedula de Identidad" />
        </FormControl>
        <FormControl className="container-form" noValidate autoComplete="off">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            required
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
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
        </FormControl>
        <Button className="send-btn" variant="contained" color="primary">
            Registrarse
        </Button>
        <Link className="default-link" to='/'>Iniciar sesión</Link>
      </form>
    </Paper>
  )
};
