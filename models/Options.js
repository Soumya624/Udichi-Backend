const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const Options_Schema = new Schema({
    question_id : {
        type : Schema.Types.ObjectId,
        ref : "question_schema"
    },
    title : {
        type : String,
        required : true
    },
    is_correct : {
        type : Boolean,
        required : true
    }
})

module.exports = mongoose.model("options_schema",Options_Schema)
