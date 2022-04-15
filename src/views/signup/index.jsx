import { useState, useEffect } from 'react'
import { useSnackbar } from 'notistack'
import { Link, useHistory } from 'react-router-dom'
import { Paper } from '@material-ui/core'
import { SIGNUP_SUCCESS } from '../../utils/static'
import { Form } from '../../components/Form'
import ciensLogo from '../../assets/ciens.png'
import UserService from '../../services/User'
import { DATE_FORMAT } from '../../utils/static'
import moment from 'moment'
import DependencyService from '../../services/Dependency'
import classnames from 'classnames/bind'
import styles from './styles.scss'

const cx = classnames.bind(styles)

export const Signup = () => {
  const history = useHistory()
  const { enqueueSnackbar } = useSnackbar()
  let [options, setOptions] = useState({dependency: [], rol: []})

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
    firstName:{
      type: 'text',
      label: 'Nombres',
      constraints: {
        required: true,
      },
      errors: {
        required: 'El campo nombres es requerido',
      }
    },
    lastName:{
      type: 'text',
      label: 'Apellidos',
      constraints: {
        required: true,
      },
      errors: {
        required: 'El campo apellidos es requerido',
      }
    },
    dependency:{
      type: 'select',
      label: 'Dependencia',
      options: options.dependency,
    },
    /*rol:{
      type: 'select',
      label: 'Rol',
      options: options.rol,
    },*/
    birthday:{
      type: 'date',
      label: 'Fecha de Nacimiento'
    }
    /*
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
    */
  };

  const [values, setValues] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthday: moment(),
    dependency: '',
  })

  const [formValid, setFormValid] = useState(false)

  const submitProps = {
    className: "send-btn",
    variant: "contained",
    color: "primary"
  }

  useEffect(() => {
    async function fetchData() {
      const pageSize = -1
      const { data: { data: { data } } } = await DependencyService.all(null, pageSize)
      console.log(data)
      const dependencies = data.map(
        ({name}) => ({value: name, text: name})
      )
      const roles = [
        {value: 'student', text: 'Estudiante'}, 
        {value: 'teacher', text: 'Profesor'}, 
        {value: 'intern', text: 'Pasante'}
      ]
      
      setOptions({'dependency': dependencies, 'rol': roles})
      setValues({...values, dependency: dependencies[0].value, rol: roles[0].value})
    }
    fetchData()
  }, [])

  const submitCallback = (e) => {
    e.preventDefault()

    const body = {
      email: values.email,
      password: values.password,
      password_confirmation: values.password,
      fullName: values.firstName,
      birthday: values.birthday.format(DATE_FORMAT),
    }

    UserService.create({body})
    .then(() => {
      enqueueSnackbar(SIGNUP_SUCCESS.message, SIGNUP_SUCCESS.props);
      history.push('/login')
    })
    .catch(e => {
      //TODO Error Handling
      console.error(e)
    })
    
  }

  return (
    <div className="paper-container">
      <Paper className="paper-form login-form">
        <img className="logo" src={ciensLogo} alt=""/>
        <Form
          structure={structure} 
          onSubmitCallback={submitCallback} 
          values={values} 
          setValues={setValues}
          formValid={formValid}
          setFormValid={setFormValid}
          submitText="Registrar"
          submitProps={submitProps}
        >
          <Link className={cx('default-link', 'link')} to='login'>Ya posee una cuenta?</Link>
          <Link className={cx('default-link', 'link')} to='forgot'>Olvido su contraseña?</Link>
        </Form>
      </Paper>
    </div>
  )
}
