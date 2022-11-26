const uploadMulter = require("./uploadMulter.js");
const XLSX = require("xlsx");
const Candidate = require("../../models/Candidates");
const CandidateGroup = require("../../models/CandidatesGroup");

const createCandidatesFromFileUpload = async (req, res) => {
	uploadMulter(req, res, async (err) => {
		if (err) {
			console.log(err)
			res.status(500).json(err);
		} else {
			try {
				const workbook = XLSX.readFile(`${req.file.destination}${req.file.filename}`);
				const sheet_name_list = workbook.SheetNames;

				const xlData = XLSX.utils.sheet_to_json(
					workbook.Sheets[sheet_name_list[0]],
				);

                let candidate_grp = await CandidateGroup({title : req.body.title})
                candidate_grp.save()

                for(let xld of xlData){
                    let candidate = {
                        firstname : xld.FirstName,
                        lastname : xld.LastName,
                        fathername: xld["Fathers Name"],
                        aadharnumber: xld["Adhar No."],
                        email : xld.Email,
                        username : xld.Username,
                        password : xld.Password,
                        mobile : xld.Mobile,
                        telephone : xld.Telephone,
                        street : xld.Street,
                        city : xld.City,
                        state : xld.State,
                        country : xld.Country,
                        zip : xld.Zip,
                        candidate_group : candidate_grp._id 
                    }
                    let candidate_obj = await Candidate(candidate)
                    candidate_obj.save()

                    candidate_grp.candidates.push(candidate_obj._id)
                }
                
                
                res.json(candidate_grp)
			} catch (err) {
                console.log(err)
				res.status(500).json("Error...");
			}
		}
	});
};

module.exports = createCandidatesFromFileUpload;
