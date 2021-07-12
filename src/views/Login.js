import Cookies from 'universal-cookie';
import { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { Form } from '../components/Form';
import UserService from '../services/User';
import CiensLogo from '../assets/ciens.png';
import { ACCESS_TOKEN_KEY } from '../utils/static';

export const Login = () => {
  const history = useHistory();

  const structure = {
    username:{
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
    password:{
      type: 'password',
      label: 'Contraseña',
      constraints: {
        required: true,
      },
      errors: {
        required: 'El campo contraseña es requerido',
      }
    },
  };

  const [formValid, setFormValid] = useState(false);


  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const submitProps = {
    className: "send-btn",
    variant: "contained",
    color: "primary"
  }

  const submitCallback = (e) => {
    e.preventDefault();
    const valid = ref.current.formValid();
    if(!valid)return;

    UserService.login(values)
    .then(({data: {access_token}}) => {
      const cookies = new Cookies();
      cookies.set(ACCESS_TOKEN_KEY, access_token, { path: '/' });
      history.push('/events');
    })
    .catch(e => console.error(e))
  }

  const ref = useRef();

  return (
    <div className="paper-container">
      <Paper className="paper-form login-form">
        <img className="logo" src={CiensLogo} alt=""/>
        <Form
          structure={structure} 
          onSubmitCallback={submitCallback} 
          values={values} 
          setValues={setValues}
          formValid={formValid}
          setFormValid={setFormValid}
          submitText="Iniciar Sesión"
          submitProps={submitProps}
          ref={ref}
        >
          <Link className="default-link" to='signup'>Aún no posee una cuenta?</Link>
          <Link className="default-link" to='forgot'>Olvido su contraseña?</Link>
        </Form>
      </Paper>
    </div>
  )
};
