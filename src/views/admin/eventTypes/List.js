import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { DeleteOutlined as DeleteOutlinedIcon, Edit as EditIcon } from '@material-ui/icons';
import EventTypeService from '../../../services/EventType';
import { Button, IconButton } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import MaterialTable from 'material-table';
import { useState, useEffect } from 'react';

const ActionRow = ({_id}) => {

  const history = useHistory();

  const editAction = () => {
    history.push('/event-type-edit', {id: _id});
  }

  const deleteAction = () => {
    
  }

  return (
    <>
      <IconButton className="black" aria-label="delete" onClick={editAction}>
        <EditIcon />
      </IconButton>
      <IconButton className="black" aria-label="delete" onClick={deleteAction}>
        <DeleteOutlinedIcon />
      </IconButton>
    </>
  );
};

export const List = () => {

  const [eventTypes, setEventTypes] = useState([]);
  const history = useHistory();
  const columns = [
    {
      title: 'Opciones',
      field: 'options',
      sorting: false,
      cellStyle: {
        padding: 0,
        paddingLeft: 7,
      },
      render: rowData => <ActionRow {...rowData}></ActionRow>
    },
    { 
      title: 'Nombre', 
      field: 'name'
    },
  ];

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#4caf50',
      },
      secondary: {
        main: '#ff9100',
      },
    },

  });

  const addAction = () => {
    history.push('/event-type-create');
  }

  useEffect(() => {
    const query = async () => {
      const {data} = await EventTypeService.all();
      data.data.forEach(eventType => {
        setEventTypes(oldArray => [...oldArray, eventType]);
      });
    }
    query();

    return () => {
      setEventTypes([]);
    }
  }, []);

  return (
    <div className="table-fix no-box-shadow">
      <div className="head-section">
        <div className="title-head">Lista de Tipos de Eventos</div>
        <div className="options">
          <Button variant="contained" onClick={addAction}>Crear</Button>
        </div>
      </div>
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          localization={{
            header: {
              actions: 'Opciones'
            }
          }}
          title=""
          columns={columns}
          data={eventTypes}        
          options={{
            pageSize: 8,
            pageSizeOptions: [],
            draggable: false
          }}
        />
      </MuiThemeProvider>
    </div>
  );
}