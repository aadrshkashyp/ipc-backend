Welcome to the IPC Code Manager Backend repository! This backend serves as the server-side component of the IPC Code Manager application. It handles data storage, retrieval, and management for IPC codes and descriptions.

# Installation and Setup

- Clone this repository to your local machine.
- Navigate to the `backend` folder: `cd backend`.
- Install dependencies: `npm install`.
- Update the MongoDB URLs, username and password in `index.js`.
- Run the service: `node index.js`.

## Endpoints and Functions

- `GET /api/ipc`: Retrieve a list of all IPC codes and descriptions..
- `POST /api/ipc`: Add a new IPC code and description.
- `DELETE /api/ipc/:id`: Delete an IPC code by its ID.
- `PUT /api/ipc/:id`: Update an IPC description by its ID.

## Libraries and Technologies Used

- Express.js: A web application framework for Node.js, used for routing and handling requests.
- Mongoose: An ODM (Object Data Modeling) library for MongoDB, used for modeling and interacting with the database.
- MongoDB Atlas: A cloud-based database service for MongoDB.
- Cors: Middleware for enabling CORS (Cross-Origin Resource Sharing) in the server.


## Contributions
Contributions to this project are welcome! Feel free to submit pull requests and report issues on GitHub.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
