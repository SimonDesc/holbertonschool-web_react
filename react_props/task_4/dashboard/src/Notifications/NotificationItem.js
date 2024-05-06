import React from 'react'
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
	let listItems;

	if (value) {
		listItems = (
			<li data-notification-type={type}>{value}</li>
		)
	} else {
		listItems = (
			<li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
		)
	}

	return listItems
}

NotificationItem.propTypes = {
	type: PropTypes.string.isRequired,
	html: PropTypes.shape({
		__html: PropTypes.string
	}),
	value: PropTypes.string
}

export default NotificationItem;
