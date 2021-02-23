import { useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import DependencyService from '../../../services/Dependency';
import MaterialTable from 'material-table';

export const List = () => {

  const [dependencies, setDependencies] = useState([]);
  const columns = [
    { 
      title: 'Nombre', 
      field: 'name'
    },
  ];
  const editable = {
    onRowAdd: newData => DependencyService.create({body: newData})
    .then(response => {
      if(response.status === 200)
        setDependencies(oldArray => [...oldArray, response.data.data]);
    })
    .catch(e => {
      console.error(e);
    }),

    onRowUpdate: (newData, oldData) => {
      const index = oldData.tableData.id;
      const id = dependencies[index]._id;
      return DependencyService.update({body: newData, id: id})
      .then(response => {
        if(response.status === 200){
          const newDependencies = [...dependencies];
          newDependencies[index] = response.data.data;
          setDependencies(newDependencies);
        }
      })
      .catch(e => {
        console.error(e);
      })
    },

    onRowDelete: oldData => {
      const index = oldData.tableData.id;
      const id = dependencies[index]._id;
      const data = [{_id: id}];
      return DependencyService.destroy({body: {data}})
      .then(response => {
        if(response.status === 200){
          const dataDelete = [...dependencies];
          dataDelete.splice(index, 1);
          setDependencies(dataDelete);
        }
      })
      .catch((e) => {
        console.error(e);
      });
    }
  };
  
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

  useEffect(() => {
    const query = async () => {
      const {data} = await DependencyService.all();
      data.data.forEach(dependency => {
        setDependencies(oldArray => [...oldArray, dependency]);
      });
    }
    query();

    return () => {
      setDependencies([]);
    }
  }, []);

  return (
    <div className="no-box-shadow">
      <div className="title-head">Lista de Dependencias</div>
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          localization={{
            header: {
              actions: 'Opciones'
            }
          }}
          title=""
          columns={columns}
          data={dependencies}        
          options={{
            pageSize: 8,
            pageSizeOptions: [],
            draggable: false
          }}
          editable={editable}
        />
      </MuiThemeProvider>
    </div>
  );
}