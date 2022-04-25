import React from 'react'
import { Link } from 'react-router-dom';
import { IconButton, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import classnames from 'classnames/bind'
import styles from './styles.scss'

const cx = classnames.bind(styles)

export const Sidebar = ({items, sidebarState, setSidebarState}) => {
  const list = items.map(({id, link, name, onClick = null}) => 
    <li key={id}>
      <Link className="default-link" to={link}>
        <Button onClick={onClick}>{name}</Button>
      </Link>
    </li>
  );

  return (
    <div className={`sidebar ${ sidebarState ? 'active' : '' }`}>
      <div className="sidebar-container">
        <div className={cx("close-btn")}>
          <IconButton onClick={() => setSidebarState(false)} aria-label="menu" size="medium">
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </div>
        <ul className="items">{list}</ul>
      </div>
    </div>
  )
}
