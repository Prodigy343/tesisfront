import { createRef } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import DependencyService from '../../../../services/Dependency';
import classnames from 'classnames/bind'
import styles from './styles.scss'

const cx = classnames.bind(styles)

export const List = () => {

  const tableRef = createRef();
  const columns = [
    { 
      title: 'Nombre', 
      field: 'name'
    },
  ];
  const editable = {
    onRowAdd: newData => 
      DependencyService.create(newData)
      .then(({status}) => {
        if(status >= 200 && status < 300)
          tableRef.current && tableRef.current.onQueryChange()
      })
      .catch(e => 
        console.error(e)
      ),

    onRowUpdate: (newData, oldData) => {
      console.log(newData, oldData)
      return DependencyService.update(newData, oldData.name)
      .then(({status}) => {
        if(status >= 200 && status < 300)
          tableRef.current && tableRef.current.onQueryChange()
      })
      .catch(e =>
        console.error(e)
      )
    },

    onRowDelete: oldData => {
      return DependencyService.destroy(oldData.name)
      .then(({status}) => {
        //if(status >= 200 && status < 300)
          //tableRef.current && tableRef.current.onQueryChange({page: 0})
      })
      .catch((e) => 
        console.error(e)
      );
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

  const dataCallback = query =>
    new Promise((resolve, reject) => {
      console.log("???????????")
      console.log(query)
      DependencyService.all(query.page+1, 2)
      .then(({data: {data}}) => {
        console.log("data-----")
        console.log(data)
        resolve({
          data: data.data,
          page: query.page,
          totalCount: data.total
        })
        tableRef?.current?.onQueryChange({
          page:
            query.page === 0 || query.totalCount % query.pageSize !== 1
              ? query.page
              : query.page - 1
        })
      })
    })

  return (
    <div className="no-box-shadow">
      <div className="title-head">Lista de Dependencias</div>

    </div>
  );
}