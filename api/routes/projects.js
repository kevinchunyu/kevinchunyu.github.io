const router = require('express').Router();
const Project = require('../models/projects.model');

router.get('/json', (req , res) => {
    res.json(
        {
            'path' : 'json',
            'author': 'testing'
        }
    ); 
});

router.get('/getAllProjects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.post('/addNewProject', async (req, res) => {
    try {
        const { title, projectDescription, category, skills } = req.body;
        const newProject = new Project({
            title,
            projectDescription,
            category,
            skills
        });
        await newProject.save();
        res.json('Project added to database!');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

module.exports = router;
