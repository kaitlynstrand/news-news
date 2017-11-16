var Note = require("../models/Note");
var createDate = require("../scripts/date");

module.exports = {
	get: function(data, cb) {
		Note.find({
			_headlineId: data._id
		}, cb);
	},
	save: function(data, cb) {
		var newNote = {
			_headlineId: data._id,
			date: createDate(),
			noteText: data.noteText
		};

		Note.create(newNote, function(err, docs) {
			if (err) {
				console.log(err);
			}
			else {
				console.log(docs);
				cb(docs);
			}
		});
	},
	delete: function(data, cb) {
		Note.remove({
			_id: data._id
		}, cb);
	}
}

