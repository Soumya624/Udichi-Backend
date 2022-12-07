const Submission = require("../../models/Submission");

const getResultByAttemptsIdAndTestId = async (req, res) => {
	try {
		const { test_id, question_id, attempt_id } = req.params;
		let question_submission = await Submission.find({
			test: test_id,
			question: question_id,
			attempt_id: attempt_id
		});
		res.status(200).send(question_submission);
	} catch (error) {}
};

module.exports = getResultByAttemptsIdAndTestId;
