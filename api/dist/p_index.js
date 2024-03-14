
// run submission of input when submit button is clicked

let projectForm = document.getElementById('addProjectForm');

// Function to send form data
async function sendData(form) {
    // Get form input values
    let title = form.title.value;
    let projectDescription = form.projectDescription.value;
    let category = form.category.value;
    let skills = form.skills.value;

    // Construct the data object
    let data = {
        title: title,
        projectDescription: projectDescription,
        category: category.split(',').map(item => item.trim()),
        skills: skills.split(',').map(item => item.trim())
    };

    try {
        const response = await fetch("http://localhost:5000/api/projects/addNewProject", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });
        console.log(await response.json());
        window.location.reload();
    } catch (e) {
        console.error(e);
    }
}

// add to submit 
projectForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // get form values // check
    sendData(projectForm);
})