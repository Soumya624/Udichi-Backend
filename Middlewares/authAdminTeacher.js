const checkAdminToken = (req, res, next) => {
	console.log(req.headers)
	const user_type = req.headers["user-type"];
	if (typeof user_type !== "undefined") {
		if(user_type === "teacher" || user_type === "admin") next();
		else res.sendStatus(403)
	} else {
		console.log("amslfknmd")
		res.sendStatus(403);
	}
};

module.exports = checkAdminToken;
