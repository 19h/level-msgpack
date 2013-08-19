// modules
var level = require("level");

// level-msgpack
var lmp = require("../").lmp;

// level
var db = level(__dirname + "/db");

db.put("test", "key", { "valueEncoding": lmp }, function () {
	db.get("test", { "valueEncoding": lmp }, function (err, str) {
		console.log(str);
	})
})

db.put("testA", { test: true }, { "valueEncoding": lmp }, function () {
	db.get("testA", { "valueEncoding": lmp }, function (err, str) {
		console.log(str);
	})
})

db.put("testB", { test: 0xDF, "x": new Date, y: "3sda" }, { "valueEncoding": lmp }, function () {
	db.get("testB", { "valueEncoding": lmp }, function (err, str) {
		console.log(str);
	})
})