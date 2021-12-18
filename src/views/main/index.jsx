import React, {useState} from 'react'
import { Container, Grid, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Sidebar } from '../../components/Sidebar';
import CiensLogo from '../../assets/ciens.png';
import classnames from 'classnames/bind'
import styles from './styles.scss'

const cx = classnames.bind(styles)

export const Main = ({children}) => {
  const items = [
    {
      id: 0,
      name: "Eventos",
      link: "/events",
    },
    {
      id: 1,
      name: "Dependencias",
      link: "/dependency-list",
    },
    {
      id: 2,
      name: "Tipos de Eventos",
      link: "/event-type-list",
    },
    {
      id: 3,
      name: "Mi perfil",
      link: "/profile",
    },
    {
      id: 4,
      name: "Cerrar Sesión",
      link: "/",
    },
  ]

  const [sidebarState, setSidebarState] = useState(false)

  return (
    <React.Fragment>
      <Container className="bg-white main-container" maxWidth="lg">
        
        <Grid container spacing={3} className="navbar">
          <Grid className="align-middle" item xs={2}>
            <img className={cx('logo-small')} src={CiensLogo} alt=""/>
          </Grid>
          <Grid className="align-middle" item xs={8}>
            <div>Coordinacion de extension</div>
          </Grid>
          <Grid className="align-middle" item xs={2}>
            <div className="right">
              <IconButton onClick={() => setSidebarState(true)} aria-label="menu" size="medium">
                <MenuIcon fontSize="inherit" />
              </IconButton>
            </div>
          </Grid>
        </Grid>

        {children}
      </Container>
      <Sidebar sidebarState={sidebarState} setSidebarState={setSidebarState} items={items} />
    </React.Fragment>
  )
}
