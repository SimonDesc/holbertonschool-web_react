export function getFullYear() {
	let currentDate = new Date();
	return currentDate.getFullYear();
}

export function getFooterCopy(isIndex) {
	if (isIndex) {
		return "Holberton School"
	}
	return "Holberton School main dashboard"
}
