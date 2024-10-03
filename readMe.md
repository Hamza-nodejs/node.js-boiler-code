
# Node.js Express Boilerplate

This is a boilerplate code for a Node.js application using the Express.js framework. You can reuse this code for multiple purposes.

## Getting Started

### Installation
1. Clone the repository.
2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Server Locally
To run the server locally, use the following commands:

- For development mode:
  ```bash
  npm run dev
  ```
  > This command uses `nodemon` (a development dependency) to automatically restart the server when files are changed.

- For production mode:
  ```bash
  npm run start
  ```

### Development Dependency
- `nodemon` is used as a dev dependency to enable live-reloading during development.

## Folder Structure
```
project-root
│   .env
│   .gitignore
│   README.md
│   package.json
│
├───src
│   └───index.js       # Entry point of the application
│
└───node_modules       # Installed dependencies
```

### Customization
Feel free to customize this boilerplate according to your project needs. Happy coding!
