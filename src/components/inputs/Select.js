import { FormControl, InputLabel, Select as MaterialSelect, MenuItem  } from '@material-ui/core';

export const Select = ({id, key, label, errors, constraints, errorState, options, ...attr}) => {
  const selectOptions = options.map(
    ({value, text}, index) => (
      <MenuItem key={index} value={value}>{text}</MenuItem>
    )
  );

  return (
    <FormControl className={`container-form ${errorState?'ext-error':''}`}>
      <InputLabel id={id}>{label}</InputLabel>
      <MaterialSelect {...attr} labelId={id} id={`${id}-select`}>
        {selectOptions}
      </MaterialSelect>
      <div className="ext-error">{errors?.[errorState]}</div>
    </FormControl>
  );
}
