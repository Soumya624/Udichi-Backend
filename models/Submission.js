const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSubmissionSchema = new Schema({
	test: {
		type: Schema.Types.ObjectId,
		ref: "test_schema",
	},
	candidate: {
		type: Schema.Types.ObjectId,
		ref: "candidate_schema",
	},
	options_marked: [
		{
			type: Schema.Types.ObjectId,
			ref: "options_schema",
		},
	],
	subjective_answer: {
		type: String,
	},
	status: {
		type: String,
	},
});

module.exports = mongoose.model(
	"question_submission_schema",
	QuestionSubmissionSchema,
);
