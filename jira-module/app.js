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


const newProject = {
  "notificationScheme": 10021,
  "description": "Example Project description",
  "lead": "Charlie",
  "url": "http://atlassian.com",
  "projectTemplateKey": "com.atlassian.jira-core-project-templates:jira-core-simplified-project-management",
  "avatarId": 10200,
  "issueSecurityScheme": 10001,
  "name": "Example",
  "permissionScheme": 10011,
  "assigneeType": "PROJECT_LEAD",
  "projectTypeKey": "business",
  "key": "EX",
  "categoryId": 10120
}

jira.project.createProject(newProject, (error, prj) =>{
  if(error) {
    console.log(error)
  } else {
    console.log(prj);
  }
})

// jira.project.getAllProjects({},(error, prj) =>{
//   if(error) {
//     console.log(error)
//   } else {
//     console.log(prj);
//   }
// } )
