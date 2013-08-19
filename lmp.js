var msgpack = require("msgpack");

module.exports = {
	encode: msgpack.pack,
	decode: msgpack.unpack,
	buffer: true,
	type: "msgpack"
};