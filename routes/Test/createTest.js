const Test_Schema = require('../../models/Test')

const createTest = async ( req,res )=>{
    try {
        let test = await Test_Schema(req.body);
        test.save()
        .then((data)=>{
            return res.status(200).send(data)
        })
        .catch((err)=>{
            return res.status(500).send(err)
        })
    } catch (error) {
		res.status(500).send(error);
    }
}

module.exports = createTest