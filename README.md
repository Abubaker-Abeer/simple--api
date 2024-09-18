# simple--api
 
This is a simple API built using Node.js and Express, offering several endpoints for managing users and retrieving server information.

## Endpoints
1. Home Endpoint
GET /

This endpoint returns a simple welcome message.
![Screenshot 2024-09-18 030737](https://github.com/user-attachments/assets/ee9b7a0d-180d-4a94-8029-5a2b2a71a8cd)
2. Add User Endpoint
POST /users

This endpoint allows you to add a new user by providing a name and email in the request body.

3. Get All Users Endpoint
GET /users

This endpoint returns a list of all users.
![Screenshot 2024-09-18 031404](https://github.com/user-attachments/assets/d9d9cb43-5159-4da7-8213-e34f8dfa6d05)


4. Greet Endpoint
GET /greet?name={SOME_NAME}

This endpoint returns a personalized greeting if a name is provided, or a default greeting otherwise.
![Screenshot 2024-09-18 030858](https://github.com/user-attachments/assets/15e754eb-6796-4b10-83f6-c444321018cf)
![Screenshot 2024-09-18 030805](https://github.com/user-attachments/assets/64e1fd33-a1e2-40b3-9007-1309d20bfa1d)



5. Info Endpoint
GET /info

This endpoint returns server information, including the current time, client IP address, host name, and the number of registered users.
![Screenshot 2024-09-18 031259](https://github.com/user-attachments/assets/51d9702e-0b87-40b9-83c1-042277129d1f)


## Project Setup
Requirements
Node.js (v14 or later)
Express.js

## Running the App Locally:

### 1. Clone the Repository:
```
git clone https://github.com/your-username/simple-express-api.git
cd simple-express-api

```
### 2.Install the dependencies:

```
npm install
```
### 3. Start the server:

```
node app.js
```
The app will be available at http://localhost:3000.

