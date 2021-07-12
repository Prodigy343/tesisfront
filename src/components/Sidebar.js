import React from 'react'
import { Link } from 'react-router-dom';
import { IconButton, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export const Sidebar = ({items, sidebarState, setSidebarState}) => {
  const list = items.map(item => 
    <li key={item.id}>
      <Link className="default-link" to={item.link}>
        <Button>{item.name}</Button>
      </Link>
    </li>
  );

  return (
    <div className={`sidebar ${ sidebarState ? 'active' : '' }`}>
      <div className="sidebar-container">
        <div className="close-btn">
          <IconButton onClick={() => setSidebarState(false)} aria-label="menu" size="medium">
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </div>
        <ul className="items">{list}</ul>
      </div>
    </div>
  )
}
