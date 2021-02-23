import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { FormControl, InputLabel, Select as MaterialSelect, MenuItem, TextField, IconButton } from '@material-ui/core';
import { DeleteOutlined as DeleteOutlinedIcon } from '@material-ui/icons';
import EventTypeService from '../../../services/EventType';
import Button from '@material-ui/core/Button';


export const Create = () => {
  const history = useHistory();
  const [inputList, setInputList] = useState([{ label: "", type: "" }]);
  const [eventTypeName, setEventTypeName] = useState("");
 
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { label: "", type: "" }]);
  };

  const handleNameChange = (e) => {
    const { value } = e.target;
    setEventTypeName(value);
  }

  const options = [
    {value: 'text', text: 'Texto'},
    {value: 'date', text: 'Fecha'},
    {value: 'number', text: 'Numerico'},
    {value: 'textarea', text: 'Area de texto'},
    {value: 'file', text: 'Archivo'},
  ];

  const selectOptions = options.map(({value, text}) => {
    return <MenuItem value={value}>{text}</MenuItem>;
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if(!eventTypeName)return;

    const body = {
      name: eventTypeName,
      fields: inputList
    };

    EventTypeService.create({body})
    .then(response => {
      history.push('/event-type-list');
    })
    .catch(e => {
      console.error(e);
    });
  }

  return (
    <div>
      <form className="form-container-full custom-width text-left" onSubmit={onSubmit}>
        <div className="head-section">
          <div className="title-head">Crear Tipo de Evento</div>
          <div className="options">
            <Button variant="contained" onClick={handleAddClick}>Agregar campo</Button>
            <Button className="ml-2" variant="contained" onClick={handleAddClick}>Previsualización</Button>
          </div>
        </div>

        <div>
          <div className="info">
            El siguiente campo indicará el nombre del tipo de evento.
          </div>
          <FormControl className="container-form container-full">
            <TextField name="event-type-name" value={eventTypeName} onChange={handleNameChange} placeholder="Ingrese el nombre del tipo de evento" label="Nombre"/>
          </FormControl>
        </div>

        <div className="row">
          <div className="info pt-30">
            Debe indicar cuales son los campos y sus respectivos nombres que desean que tenga el tipo de evento.
          </div>
        </div>

        {inputList.map((x, i) => {
          return (
            <div className="row row-list">
              <div className="fields">
                <FormControl className="container-form container-half">
                  <TextField name="label" value={x.label} onChange={e => handleInputChange(e, i)} placeholder="Ingrese el label" label="Label"/>
                </FormControl>
                <FormControl className="container-form container-half">
                  <InputLabel id={`select-${i}`}>Tipo de campo</InputLabel>
                  <MaterialSelect labelId={`select-${i}`} name="type" id={`${i}-select`} value={x.type} onChange={e => handleInputChange(e, i)}>
                    {selectOptions}
                  </MaterialSelect>
                </FormControl>
              </div>
              
              <div className="btn-box">
                {inputList.length !== 1 &&
                  <IconButton className="black" aria-label="delete" onClick={() => handleRemoveClick(i)}>
                    <DeleteOutlinedIcon />
                  </IconButton>  
                }
              </div>
            </div>
          );
        })}

        <div className="row text-center p-5">
          <Button variant="contained" type="submit">Crear</Button>
        </div>
      </form>
    </div>
  )
}
