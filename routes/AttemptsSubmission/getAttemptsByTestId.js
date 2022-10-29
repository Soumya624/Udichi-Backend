const AttemptSchemaGroup = require("../../models/AttemptsGroupSchema");

const getAttemptsByTestId = async (req, res) => {
	try {
		let attempt_schema = await AttemptSchemaGroup.find({
			test: req.body.test,
		});
		if (attempt_schema.length() === 0) res.status(404).send("Not Found");

		res.status(200).send(attempt_schema[0]);
	} catch (error) {
		res.status(500).json(error.message);
	}
};

module.exports = getAttemptsByTestId;