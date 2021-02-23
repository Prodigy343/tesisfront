import { TextField, FormControl } from '@material-ui/core';

export const Text = ({id, key, label, errors, constraints, errorState, ...attr}) => {

  return (
    <FormControl className={`container-form ${errorState?'ext-error':''}`}>
      <TextField {...attr} label={label}/>
      <div className="ext-error">
        {errors[errorState]}
      </div>
    </FormControl>
  );
}
