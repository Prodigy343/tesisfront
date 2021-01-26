import React from 'react'

export const Input = ({type, ...props}) => {
  
  switch (type) {
    case 'text':
      const {errors, constraints, errorState, ...attr} = props;
      return 
        <FormControl className={`container-form ${errorState?'ext-error':''}`}>
          <TextField {...attr}/>
          <div className="ext-error">
            {errors[errorState]}
          </div>
        </FormControl>;
    break;

    default:
      break;
  }
}
