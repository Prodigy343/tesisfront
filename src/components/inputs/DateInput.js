import moment from 'moment'
import MomentUtils from "@date-io/moment"
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { FormControl } from '@material-ui/core'
import { DATE_FORMAT } from '../../utils/static'

const MIN_DATE = moment("01/01/1990", DATE_FORMAT)
const MAX_DATE = moment()

export const DateInput = ({ 
  autoOk = false,
  showTodayButton = true,
  minDate = MIN_DATE,
  maxDate = MAX_DATE,
  format = DATE_FORMAT,
  onChange,
  value,
  label,
}) => {

  return (
    <FormControl className={`container-form`}>
      <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>  
        <KeyboardDatePicker
          label = {label}
          value = {value}
          minDate = {minDate}
          maxDate = {maxDate}
          onChange = {onChange}
          showTodayButton = {showTodayButton}
          autoOk = {autoOk}
          format = {format}
        />
      </MuiPickersUtilsProvider>
    </FormControl>
  )
}
