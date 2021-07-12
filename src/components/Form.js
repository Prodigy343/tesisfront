import { useState, forwardRef, useImperativeHandle } from 'react';
import { Input } from './Input';
import { Button } from '@material-ui/core';

export const Form = forwardRef(({ 
  structure,
  service,
  onSubmitCallback,
  values, setValues,
  submitText, submitProps,
  children
}, ref) => {

const [errorStates, setErrorStates] = useState(() => {
  const initialErrors = {};
  Object.keys(structure).forEach(key => {
    initialErrors[key] = false;
  });
  return initialErrors;
});

const dateHandler = (prop) => (value) => {
  setValues(prev => ({ ...prev, [prop]: value }));
}

const handleChange = (prop) => (event) => {
  verifyError(prop, event.target.value);
  setValues(prev => ({ ...prev, [prop]: event.target.value }));
};

const verifyErrors = () => {
  const errorsUpdated = {...errorStates};
  let valid = true;
  
  Object.keys(structure).forEach(prop => {
    let error = verifyError(prop, values[prop], false);
    errorsUpdated[prop] = verifyError(prop, values[prop], false);
    if(valid && error !== false) valid = false;
  });
  
  setErrorStates(errorsUpdated);
  return valid;
}

const verifyError = (prop, value, setError = true) => {
  const types = Object.keys(structure[prop].constraints ? structure[prop].constraints : {});
  let error = false, key;
  
  for(let i=0 ; i<types.length ; i++){
    key = types[i];
    const regexKey = /regex\d$/;

    if(key === 'required')
      error = value.length === 0;
    else if(regexKey.test(key))
      error = !structure[prop].constraints[key].test(value);

    if(error)break;
  }

  if(setError)setErrorStates({ ...errorStates, [prop]: error ? key : false });
  return error ? key : false;
}

const inputs = Object.keys(structure).map(key => {
  const { type } = structure[key];
  return <Input 
    id={key}
    key={key}
    {...structure[key]} 
    value={values[key]}
    errorState={errorStates[key]}
    onBlur={type === 'date'? dateHandler(key) : handleChange(key)}
    onChange={type === 'date'? dateHandler(key) : handleChange(key)}
  />;
});

const onSubmit = (e) => {
  e.preventDefault();
  const valid = verifyErrors();
  if(valid){
    const body = {};
    Object.keys(values).forEach(key => {
      body[key] = values[key];
    })

    service({body})
    .then(data => {
    })
    .catch(e => {
      console.error(e);
    });
  }
}

useImperativeHandle(ref, () => ({
  formValid: verifyErrors
}));

return (
  <form onSubmit={ onSubmitCallback? onSubmitCallback: onSubmit }>
    { inputs }
    <Button type="submit" {...submitProps}>
        { submitText }
    </Button>
    { children }
  </form>
)
});
