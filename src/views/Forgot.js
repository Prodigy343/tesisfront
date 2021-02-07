import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, FormControl, Paper, Button } from '@material-ui/core';
import ciensLogo from '../assets/ciens.png';

export const Forgot = () => {
  return (
    <div className="paper-container">
      <Paper className="paper-form login-form">
        <img className="logo" src={ciensLogo} alt=""/>
        <form>
          <p className="info">
            Se le enviará un correo 
            a la dirección suministrada 
            en caso de existir en nuestra 
            base de datos 
          </p>
          <FormControl className="container-form" noValidate autoComplete="off">
            <TextField id="user" label="Correo Electrónico" />
          </FormControl>
          <Button className="send-btn" variant="contained" color="primary">
              Confirmar Correo
          </Button>
          <Link className="default-link" to='/'>Iniciar sesión</Link>
          <Link className="default-link" to='signup'>Registrarse</Link>
        </form>
      </Paper>
    </div>
  )
};
