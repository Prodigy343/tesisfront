import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TextField, FormControl, Paper, Button, Input, InputLabel } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import CiensLogo from '../assets/ciens.png';
import { Context } from '../Context';

export const Login = () => {

  const [values, setValues] = React.useState({
    user: '',
    password: '',
    showPassword: false,
  });

  const {setUserState} = useContext(Context);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loginFake = () => {
    console.log(values);
    setUserState(true);

  }

  return (
    <div className="paper-container">
      <Paper className="paper-form login-form">
        <img className="logo" src={CiensLogo} alt=""/>
        <form onSubmit={loginFake}>
          <FormControl className="container-form" autoComplete="off">
            <TextField id="ext-user" value={values.user} onChange={handleChange('user')} label="Usuario" />
          </FormControl>
          <FormControl className="container-form" noValidate autoComplete="off">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="ext-password"
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
          <Button type="submit" className="send-btn" variant="contained" color="primary">
              Iniciar Sesión
          </Button>
          <Link className="default-link" to='signup'>Aún no posee una cuenta?</Link>
          <Link className="default-link" to='forgot'>Olvido su contraseña?</Link>
        </form>
      </Paper>
    </div>
  )
};
