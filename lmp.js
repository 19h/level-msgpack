var msgpack = require("msgpack");

exports.lmp = {
	encode: msgpack.pack,
	decode: msgpack.unpack,
	buffer: true,
	type: "msgpack"
};