# Low Level Design (LLD)

## Project Structure

server/
- config/
- controllers/
- middleware/
- models/
- routes/
- server.js

## Database Model

### Project
- title
- description
- status

## API Routes

- GET /api/projects
- POST /api/projects
- PUT /api/projects/:id
- DELETE /api/projects/:id

## Components

### Routes
Handles API endpoints and sends requests to controllers.

### Controllers
Contains the main logic for creating, reading, updating, and deleting projects.

### Models
Defines the structure of data stored in MongoDB.

### Middleware
Handles common tasks such as JSON parsing and error handling.