// This code sample uses the 'request' library:
// https://www.npmjs.com/package/request
var request = require('request');

var bodyData = `{
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
}`;

var options = {
   method: 'POST',
   url: '/rest/api/3/project',
   auth: { bearer: 'OC1PpMS4IgvmmZOQS7B1003E' },
   headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
   },
   body: bodyData
};

request(options, function (error, response, body) {
   if (error) throw new Error(error);
   console.log(
      'Response: ' + response.statusCode + ' ' + response.statusMessage
   );
   console.log(body);
});