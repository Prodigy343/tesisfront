import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


export const Alert = ({
  elevation = 6,
  variant = 'filled',
  type = 'success',
  duration = 400,
  children,
  ...props
}) => {
  return (
    <Snackbar open={true} autoHideDuration={duration}>
      <MuiAlert elevation={elevation} variant={variant} severity={type} {...props}>
        {children}  
      </MuiAlert>
    </Snackbar>
  )
}
