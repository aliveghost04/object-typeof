'use strict';

let regex = /^\[object\ (\w+)\]$/;

let is = function (type, object) {
	if (arguments.length === 1) {
		let match = Object.prototype.toString.call(type).match(regex);

		if (match && match.length === 2) {
			return match[1].toLowerCase();
		} else {
			throw new Error('Invalid object');
		}
	} else if (arguments.length === 2 && typeof type === 'string') {
		type = type.toLowerCase();
		let typeOf = is(object);
		return typeOf ? type === typeOf : false;
	} else if (arguments.length === 2) {
		throw new Error('Invalid type');
	} else {
		throw new Error('At least 1 argument is required');
	}
};

module.exports = {
	is: is,
	isNumber: object => {
		return is('number', object);
	},
	isObject: object => {
		return is('object', object);
	},
	isBoolean: object => {
		return is('boolean', object);
	},
	isNull: object => {
		return is('null', object);
	},
	isBuffer: object => {
		return is('uint8array', object);
	},
	isUndefined: object => {
		return is('undefined', object);
	},
	isArray: Array.isArray || function (object) {
		return is('array', object);
	},
	isString: object => {
		return is('string', object);
	},
};