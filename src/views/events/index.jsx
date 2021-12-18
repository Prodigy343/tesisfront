import React from 'react'
import Test from '../../assets/test.jpg'
import { Event } from '../../components/Event'
import classnames from 'classnames/bind'
import styles from './styles.scss'

const cx = classnames.bind(styles)

export const Events = () => {
  const data = [
    {
      id: 1,
      url: Test,
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description: "Pellentesque commodo luctus tortor ac dapibus. Donec fermentum nulla vel nisi rhoncus, eget cursus arcu mollis. In tristique rutrum sapien non sollicitudin. Nullam vel velit et erat rutrum semper vitae sit amet mauris. Aliquam egestas iaculis sapien consequat hendrerit. Sed placerat dolor id metus placerat, quis vulputate eros euismod. Duis porttitor eget nisl nec blandit. Nam consectetur cursus erat vitae euismod.",
    },
    {
      id: 2,
      url: Test,
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description: "Pellentesque commodo luctus tortor ac dapibus. Donec fermentum nulla vel nisi rhoncus, eget cursus arcu mollis. In tristique rutrum sapien non sollicitudin. Nullam vel velit et erat rutrum semper vitae sit amet mauris. Aliquam egestas iaculis sapien consequat hendrerit. Sed placerat dolor id metus placerat, quis vulputate eros euismod. Duis porttitor eget nisl nec blandit. Nam consectetur cursus erat vitae euismod.",
    },
    {
      id: 3,
      url: Test,
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description: "Pellentesque commodo luctus tortor ac dapibus. Donec fermentum nulla vel nisi rhoncus, eget cursus arcu mollis. In tristique rutrum sapien non sollicitudin. Nullam vel velit et erat rutrum semper vitae sit amet mauris. Aliquam egestas iaculis sapien consequat hendrerit. Sed placerat dolor id metus placerat, quis vulputate eros euismod. Duis porttitor eget nisl nec blandit. Nam consectetur cursus erat vitae euismod.",
    },
    {
      id: 4,
      url: Test,
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description: "Pellentesque commodo luctus tortor ac dapibus. Donec fermentum nulla vel nisi rhoncus, eget cursus arcu mollis. In tristique rutrum sapien non sollicitudin. Nullam vel velit et erat rutrum semper vitae sit amet mauris. Aliquam egestas iaculis sapien consequat hendrerit. Sed placerat dolor id metus placerat, quis vulputate eros euismod. Duis porttitor eget nisl nec blandit. Nam consectetur cursus erat vitae euismod.",
    },
    {
      id: 5,
      url: Test,
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description: "Pellentesque commodo luctus tortor ac dapibus. Donec fermentum nulla vel nisi rhoncus, eget cursus arcu mollis. In tristique rutrum sapien non sollicitudin. Nullam vel velit et erat rutrum semper vitae sit amet mauris. Aliquam egestas iaculis sapien consequat hendrerit. Sed placerat dolor id metus placerat, quis vulputate eros euismod. Duis porttitor eget nisl nec blandit. Nam consectetur cursus erat vitae euismod.",
    },
  ]
  
  const events = data.map(event => 
    <Event 
      key={event.id}
      url={event.url}
      name={event.name}
      description={event.description}
    >
    </Event>
  )
  
  return (
    <div className="bg-white main-container" maxWidth="lg">      
      {events}
    </div>
  )
}
