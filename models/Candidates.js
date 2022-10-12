const mongoose = require("mongoose");

const candidateSchema = mongoose.Schema({
	firstname: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
		required: true,
	},
	aadharnumber: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	mobile: {
		type: String,
		required: true,
	},
	telephone: {
		type: String,
		required: true,
	},
	usertype: {
		type: String,
		default: "Candidate",
	},
	candidate_group: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "candidates_group_schema",
		required: true,
	},
});

module.exports = mongoose.model("candidate_schema", candidateSchema);
