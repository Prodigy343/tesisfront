import { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import DependenciesServices from '../../../services/Dependencies';

export const List = () => {


  const [dependencies, setDependencies] = useState([]);
  const columns = [
    { 
      title: 'Nombre', 
      field: 'name'
    },
  ];
  const editable = {
    onRowAdd: newData => DependenciesServices.create({body: newData})
    .then((response) => {
      if(response.status === 200)
        setDependencies(oldArray => [...oldArray, response.data.data]);
    })
    .catch(e => {
      console.error(e);
    }),

    onRowUpdate: (newData, oldData) => {
      const index = oldData.tableData.id;
      const id = dependencies[index]._id;
      return DependenciesServices.update({body: newData, id: id})
      .then((response) => {
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
      return DependenciesServices.deleteById({id: id})
      .then((response) => {
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

  useEffect(() => {
    const query = async () => {
      const {data} = await DependenciesServices.all();
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
    <MaterialTable
      title="Lista de dependencias"
      columns={columns}
      data={dependencies}        
      options={{selection: true}}
      editable={editable}
    />
  );
}