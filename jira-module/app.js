require('dotenv').config()
var JiraClient = require("jira-connector");

const host = process.env.HOST || ''
const email = process.env.EMAIL || ''
const token = process.env.TOKEN || ''
 
const jira = new JiraClient({
  host: host,
  strictSSL: true, // One of optional parameters
  basic_auth: {
    email: email,
    api_token: token
  }
});


// jira.issue.getIssue({
//   issueKey: 'WE-449'
// }, function(error, issue) {
//   if(error) {
//     console.log(error)
//   } else {
//     console.log(issue);
//   }
// });


// const newProject = {
//   "name": "Example 3",
//   "projectTypeKey": "business",
//   "description": "Example Project description",
//   "leadAccountId": "5a253f27cba5b30325a7db60",
//   "url": "http://atlassian.com",
//   "projectTemplateKey": "com.atlassian.jira-core-project-templates:jira-core-simplified-project-management",
//   "avatarId": 10200,
//   "assigneeType": "UNASSIGNED",
//   "key": "EX",
// }

// const updateProject = {
//   "name": "Example 2",
//   "projectIdOrKey": 10001
// }

// //get all projects
// const allProjects = async () => {
//   try {
//     const projects = await jira.project.getAllProjects();
//     console.log(projects)
//   } catch (err) {
//     console.log(err)
//   }
  
// }

// //create project
// const createProject = async (project) => {
//   try {
//     const projectResponse = await jira.project.createProject(project);
//     console.log(projectResponse)
//   } catch (err) {
//     throw new Error(err)
//   }
  
// }



//createProject(newProject)
//allProjects()



// jira.project.createProject(newProject, (error, prj) =>{
//   if(error) {
//     console.log(error)
//   } else {
//     console.log(prj);
//   }
// })



jira.project.getProject({"projectIdOrKey": "10015"}, (error, prj) =>{
  if(error) {
    console.log(error)
  } else {
    console.log(prj);
  }
})

// jira.project.updateProject(updateProject, (error, prj) =>{
//   if(error) {
//     console.log(error)
//   } else {
//     console.log(prj);
//   }
// })

// jira.project.getAllProjects({},(error, prj) =>{
//   if(error) {
//     console.log(error)
//   } else {
//     console.log(prj);
//   }
// } )
