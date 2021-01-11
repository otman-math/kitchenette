import React from 'react';

/**
 *
 * @param classes
 * @returns {string}
 */
export function getClasses(...classes) {
	return classes
    .filter(className => className && Object.keys(className).length)
    .map(className => typeof className === 'string' ? [className] : className)
    .reduce((classes1, classes2) => [...classes1, ...classes2], [])
    .join(' ');
}


/**
 *
 * @param level
 * @param content
 * @param classes
 * @returns {*}
 */
export function renderHead(level = 3, content = 'Header 3', classes = '') {
	const h = Number(level);
	switch (h) {
		case 1:
			return <h1 className={classes}>{content}</h1>;
		case 2:
			return <h2 className={classes}>{content}</h2>;
		case 3:
			return <h3 className={classes}>{content}</h3>;
		case 4:
			return <h4 className={classes}>{content}</h4>;
		case 5:
			return <h5 className={classes}>{content}</h5>;
		default:
			return <h6 className={classes}>{content}</h6>;
	}
}