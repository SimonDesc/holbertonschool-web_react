import React from 'react';
import './Notifications.css'
import { getLatestNotification } from './utils'

function Notifications() {
	function handleClose() {
		console.log("Close button has been clicked")
	}
	return <div className="Notifications">
		<p>Here is the list of notifications
		<button style={{ float: 'right' }} aria-label="close" onClick={ handleClose }>x</button>
		</p>
		<ul>
			<li data-priority="default">New course available</li>
			<li data-priority="urgent">New resume available</li>
			<li data-priority="urgent" dangerouslySetInnerHTML={ getLatestNotification() }></li>
		</ul>
		
	</div>;
}

export default Notifications;
