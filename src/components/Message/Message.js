import React from 'react';
import './Message.css';

export default function Message(props) {

  let className = 'message-inactive';

  if (props.isActive) {
    className = 'message-active';
  }
  
  return (
    <div className={className}>

      <div className="message-menu">
    	  <a href="#" className="closebtn">&times;</a>
      </div>

      <p>
        {props.message}
      </p>

    </div>
  )

} 
