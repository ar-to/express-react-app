# express-react-app
Test app for connecting an express server with a react app. Uses typescript and API calls

## Quick Start

```
git clone git@github.com:ar-to/express-react-app.git
cd server
npm install
npm run nodemon
```
for client open a new terminal window
```
cd client
npm install
npm start
```
for testing open another terminal window
```
cd client
npm run test
```

## About

Server uses Express generator CLI via 

```
express --pug --css=sass server
```

Client uses create-react-app with typescript via

```
create-react-app  client --typescript
```
The client expects the express server to be connected so it can call its api. Else you will see a message in the react terminal and on the landing page asking you to check it.

The UI used is [Semantic-UI for React](https://react.semantic-ui.com)