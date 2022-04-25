import { useState, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Paper } from '@material-ui/core'
import { Form } from '../../components/Form'
import UserService from '../../services/User'
import CiensLogo from '../../assets/ciens.png'
import { useUserStore } from '../../store/user'
import { setToken } from '../../axiosConfig'
import classnames from 'classnames/bind'
import styles from './styles.scss'

const cx = classnames.bind(styles)

export const Login = () => {
  const history = useHistory()

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
  }

  const [formValid, setFormValid] = useState(false)


  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const submitProps = {
    className: "send-btn",
    variant: "contained",
    color: "primary"
  }

  const setUser = useUserStore((state) => state.setUser)

  const submitCallback = (e) => {
    e.preventDefault();
    const valid = ref.current.formValid();
    if(!valid)return;
    UserService.login(values)
    .then(({data: {access_token}}) => {
      setToken(access_token)
      setUser({
        email: values.username,
        token: access_token,
      })
      //const cookies = new Cookies();
      //cookies.set(ACCESS_TOKEN_KEY, access_token, { path: '/' });
      history.push('/events');
    })
    .catch(e => console.error(e))
  }

  const ref = useRef()

  return (
    <div className={cx('paper-container')}>
      <Paper className={cx('paper-form', 'login-form')}>
        <img className={cx('logo')} src={CiensLogo} alt="logo-ucv"/>
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
          <Link className={cx('default-link', 'link')} to='signup'>
            Aún no posee una cuenta?
          </Link>
          <Link className={cx('default-link', 'link')} to='forgot'>
            Olvido su contraseña?
          </Link>
        </Form>
      </Paper>
    </div>
  )
}
