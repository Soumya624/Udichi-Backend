const AttemptSchema = require("../../models/Attempts");
const Options = require("../../models/Options");
const Questions = require("../../models/Questions");
const Submission = require('../../models/Submission')
const upload = require("./uploadMulter");

const editAttempts = async (req, res) => {
	upload(req, res, async (err) => {
		if (err) {
			res.status(500).json(err);
		}
		try {
			// const { questions_submitted } = req.body
			// let positive_marks = 0;
			// let negative_marks = 0;
			// for(let qs of questions_submitted){
			// 	let positive_marks_qs = 0;
			// 	let negative_marks_qs = 0;
 			// 	let question_submitted = await Submission.findById(qs)
			// 	let question = await Questions.findById(question_submitted.question)
			// 	let options = question_submitted.options_marked
			// 	for(let ops of options){
			// 		let op_obj = await Options.findById(ops)
			// 		if(op_obj.is_correct){
			// 			positive_marks_qs += parseFloat(question.positive_marks / question.number_of_correct_options)
			// 		}else{
			// 			negative_marks_qs = question.negative_marks
			// 			positive_marks_qs = 0;
			// 			break;
			// 		}
			// 	}
			// 	positive_marks += positive_marks_qs  
			// }
			let attempt = await AttemptSchema.findByIdAndUpdate(
				req.params.id,
				req.body,
				{
					new: true,
				},
			);
			attempt.zip_files = req.file === undefined ? attempt.zip_files : req.file;
			attempt
				.save()
				.then((data) => {
					if (data === null) return res.send(404);
					res.status(200).send(data);
				})
				.catch((err) => {
					res.status(500).json(err.message);
				});
		} catch (error) {
			console.log(error)
			res.status(500).json(error.message);
		}
	});
};

module.exports = editAttempts;
