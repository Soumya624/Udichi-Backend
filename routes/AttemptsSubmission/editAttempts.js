const AttemptSchema = require("../../models/Attempts");
const upload = require('./uploadMulter')

const editAttempts = async (req, res) => {
	upload(req,res,async(err)=>{
		if(err){
			res.status(500).json(err);
		}
		try {
			AttemptSchema.findByIdAndUpdate(req.params.id, req.body, {
				new: true,
			})
				.then((data) => {
					if(data === null) return res.send(404)
					res.status(200).send(data);
				})
				.catch((err) => {
					res.status(500).json(err.message);
				});
		} catch (error) {
			res.status(500).json(error.message);
		}
	})
};

module.exports = editAttempts;
