import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form } from '../../components/Form'
import { Paper } from '@material-ui/core'
import ciensLogo from '../../assets/ciens.png'
import classnames from 'classnames/bind'
import styles from './styles.scss'
import { EMAIL_REGEX } from '../../utils/static'

const cx = classnames.bind(styles)

export const Forgot = () => {

  const structure = {
    email:{
      type: 'text',
      label: 'Correo Electrónico',
      constraints: {
        required: true,
        regex1: EMAIL_REGEX,
      },
      errors: {
        required: 'El campo correo es requerido',
        regex1: 'El correo no tiene un formato válido'
      }
    },
  }

  const [values, setValues] = useState({
    email: '',
  })

  const [formValid, setFormValid] = useState(true)

  const submitProps = {
    className: "send-btn",
    variant: "contained",
    color: "primary"
  }

  const submitCallback = (e) => {
    e.preventDefault()
    console.log(values)
  }

  return (
    <div className="paper-container">
      <Paper className="paper-form login-form">
        <img className="logo" src={ciensLogo} alt=""/>
        <p className="info">
          Se le enviará un correo 
          a la dirección suministrada 
          en caso de existir en nuestra 
          base de datos 
        </p>
        <Form
          structure={structure} 
          onSubmitCallback={submitCallback} 
          values={values} 
          setValues={setValues}
          formValid={formValid}
          setFormValid={setFormValid}
          submitText="Confirmar correo"
          submitProps={submitProps}
        >
          <Link className={cx('default-link', 'link')} to='/'>Iniciar sesión</Link>
          <Link className={cx('default-link', 'link')} to='signup'>Registrarse</Link>
        </Form>
      </Paper>
    </div>
  )
}
