import React from 'react'
import { Paper, IconButton, Button } from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

export const Event = ({name, url, description}) => {
  return (
    <Paper className="event-container shadow-box">
      <div className="event-layout">
        <a className="img-container" href={url}>
          <img src={url} alt=""/>
        </a>
        <div className="content-container">
          <div className="title">
            <a href={url}>{name}</a>
          </div>
          <div className="information">
            <a href={url}>
              <IconButton aria-label="event" size="small">
                <EventIcon fontSize="small" />
              </IconButton>
              <span className="data">18/10/2021</span>
            </a>
            <a href={url}>
              <IconButton aria-label="schedule" size="small">
                <ScheduleIcon fontSize="small" />
              </IconButton>
              <span className="data">4:20PM</span>
            </a>
            <a href={url}>
              <IconButton aria-label="people" size="small">
                <PeopleAltIcon fontSize="small" />
              </IconButton>
              <span className="data">4.303</span>
            </a>
          </div>
          <div className="description">{description}</div>
          <div className="actions">
            <a href={url}><Button>Ver más</Button></a>
            <a href={url}><Button>Asistir</Button></a>
          </div>
        </div>
      </div>
    </Paper>
  )
}
