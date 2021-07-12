//import { useState } from 'react';
import { FormControl, InputLabel, Select as MaterialSelect, MenuItem, IconButton  } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

export const RepeatableFormField = ({id, key, label, errors, constraints, errorState, options, values, setValues, ...attr}) => {
  //const [inputList, setInputList] = useState([{ label: "", : "" }]);

  const addNewItem = () => {

  };

  const selectOptions = options.map(({value, text}) => {
    return <MenuItem value={value}>{text}</MenuItem>;
  });

  return (
    <>
      <div className="repeater-head">
        <div className="title-layout">{label}</div>
        <div className="add-layout">
          <IconButton aria-label="delete" onClick={addNewItem}>
            <AddBoxIcon />
          </IconButton>
        </div>
      </div>
      <FormControl className={`container-form ${errorState?'ext-error':''}`}>
        <InputLabel id={id}>{label}</InputLabel>
        <MaterialSelect {...attr} labelId={id} id={`${id}-select`}>
          {selectOptions}
        </MaterialSelect>
        <div className="ext-error">{errors[errorState]}</div>
      </FormControl>
    </>
  );
}
