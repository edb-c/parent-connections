# Parent Connections

Live Demo:  https://parent-connections.herokuapp.com/

This application is created to demonstrate ability to
  - Develop a social network for parents to create profiles, share posts, and network with other parents.
  - Build extensive backend API using Express and Node.js
  - Use React/Redux for frontend and state management
  - Use MongoDB/Mongoose to persist parent information
  - Use JSON Web Tokens to protect routes/endpoints



## Quick Start

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

You will need to create a keys_dev.js in the server config folder with

```
module.exports = {
  mongoURI: 'YOUR_OWN_MONGO_URI',
  secretOrKey: 'YOUR_OWN_SECRET'
};
```

### License

This project is licensed under the MIT License
