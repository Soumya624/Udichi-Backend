const AttemptSchema = require('../../models/Attempts')

const createAttempts = async (req, res) => {
	console.log("asdmlkasmdl")
	try {
		let attempt_schema = await AttemptSchema(req.body);
		attempt_schema
			.save()
			.then((data) => {
				res.status(200).send(data);
			})
			.catch((err) => {
				res.status(500).json(err.message);
			});
	} catch (error) {
		res.status(500).json(error.message);
	}
};


module.exports = createAttempts

