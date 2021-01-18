import React, {useState} from 'react'
import { Container, Grid, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Sidebar } from '../components/Sidebar';
import CiensLogo from '../assets/ciens.png';

export const Main = ({children}) => {
  const items = [
    {
      name: "Eventos",
      link: "/events",
    },
    {
      name: "Prueba 2",
      link: "test-2",
    },
    {
      name: "Prueba 3",
      link: "test-3",
    },
    {
      name: "Cerrar Sesión",
      link: "/",
    },
  ];

  const [sidebarState, setSidebarState] = useState(false);

  return (
    <React.Fragment>
      <Container className="bg-white main-container" maxWidth="lg">
        
        <Grid container spacing={3} className="navbar">
          <Grid className="align-middle" item xs={2}>
            <img className="logo-small" src={CiensLogo} alt=""/>
          </Grid>
          <Grid className="align-middle" item xs={8}>
            <div>Coordinacion de extension</div>
          </Grid>
          <Grid className="align-middle" item xs={2}>
            <div className="right">
              <IconButton onClick={() => setSidebarState(true)} aria-label="menu" size="large">
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