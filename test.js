var should = require('should'),
	object = require('./index');

describe('object-typeof', function () {
	it('{} Should be an Object', function () {
		object.isObject({}).should.be.true();
		object.isObject([]).should.be.false();
		object.is({}).should.be.equal('object');
	});

	it('1 Should be a number', function () {
		object.isNumber(1).should.be.true();
		object.isNumber('foo').should.be.false();
		object.is(1).should.be.equal('number');
	});

	it('undefined Should be undefined', function () {
		object.isUndefined(undefined).should.be.true();
		object.isUndefined('foo').should.be.false();
		object.is(undefined).should.be.equal('undefined');
	});

	it('false Should be a boolean', function () {
		object.isBoolean(false).should.be.true();
		object.isBoolean('foo').should.be.false();
		object.is(false).should.be.equal('boolean');
	});

	it('null Should be a null', function () {
		object.isNull(null).should.be.true();
		object.isNull(false).should.be.false();
		object.is(null).should.be.equal('null');
	});

	it('array Should be an array', function () {
		object.isArray([]).should.be.true();
		object.isArray(undefined).should.be.false();
		object.is([]).should.be.equal('array');
	});

	it('foo Should be a string', function () {
		object.isString('foo').should.be.true();
		object.isString(null).should.be.false();
		object.is('bar').should.be.equal('string');
	});

	it('buffer Should be a buffer', function () {
		object.isBuffer(new Buffer(0)).should.be.true();
		object.isBuffer('bar').should.be.false();
		object.is(new Buffer(0)).should.be.equal('uint8array');
	});
});