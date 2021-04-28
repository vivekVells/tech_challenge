 # iHeartMedia - Music Lab - Code Challenge

## completion status: ✅ 
- scroll below to get more info on how to setup and run the application

Create a React application that shows a list of songs with their information and metrics displayed. The app should have at least **2 pages (views)**:
A landing page, and a page to show data coming from an API.

- ✅  Use typescript and graphql for everything where applicable.

- ✅ Fork this repo and share the link when you are finished!

### UI Checklist

- ✅ Create a React App using functional based components and hooks. No class based components, please.

- ✅  Create 2 views ( pages ) using React Router.

- ✅  Create a page that renders a table displaying a list songs coming from the API. Each row is a song, each column is a song attribute. 
 
   - ✅  Do not use `table` tags

- ✅  Employ **some** styling but it doesn't have to be much. You can use the styled-components library but do not use any other styling help.

- ✅  Allow the user to scroll vertically and horizontally through columns and rows that go off screen.

- ✅  Allow the user to sort the order of the song rows by the column values.

- ✅  It **does not** need to be mobile responsive.

### API Checklist

- ✅  Store the included JSON file in an S3 bucket and use the AWS SAM CLI with a **node.js** lambda function to serve the frontend with the data.

- Authentication is not necessary.

- You do not need to deploy or host this anywhere.

- SAM CLI instructions: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html

### Backend
#### Overview
- created lambda function: `S3JsonLoggerFunction` helps to read the `songData.json` file from github repo using `octoKit` library and store it in the `S3` bucket
- used lambda function: `songsDataSource` as the data source to read the s3 bucket and return the songData.json contents as JSON
### Tech stack: 
- AWS Lambda, AWS S3

### Frontend
#### Overview
- GraphQL Query, `useQuery` via `@apollo/react-hooks` fetches the data by hitting the endpoint in the middleware `AWS AppSync` -> AppSync uses the `AWS Lambda function` as the resolver to return the data
- used CSS Grid to create table without using the <table> tag
- used react-router-dom to handle the routing logics
- user can sort the column headers ascending or descending order
- handled routing between two pages using react-router-dom and shared the data among the components via `useLocation`
- avoiding using any unnecessary packages

### Tech stack: 
- AWS Amplify, ReactJS, TypeScript, HTML, CSS, GraphQL, AppSync
### Few Notables
- followed Agile & SDLC process
- mocked few data and UI components wherever necessary
- used AWS Amplify to readily deploy the code after completion

#### Pending Features
- create CI/CD pipeline - whenever making changes to songData.json file, the trigger should happen automatically to upload the file to S3 bucket
## Demo
