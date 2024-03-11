const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title : {type: String, required: true},
    projectDescription : {type: String, required: true},
    category : {type: Array, required: true},
    skills : {type: Array, required: true},
},   {
    timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;