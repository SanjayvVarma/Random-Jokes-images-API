# random_image_and_joke_generator

## Setup

1) Clone the repository.

2) Run npm install to install dependencies.

3) Create a .env file in the root directory with the following content:
    ```
    UNSPLASH_ACCESS_KEY=YOUR_UNSPLASH_ACCESS_KEY

4) Replace `YOUR_UNSPLASH_ACCESS_KEY` with your actual Unsplash access key.

5) Run the server using `npm start`

## Endpoints

- ### GET /api/images/random
    - Fetches a random image from the Unsplash API.
    - Requires a valid Unsplash access key.
    - Returns an object with URLs of the random image.

- ### GET /api/jokes/random
    - Fetches a random dad joke from the api appspot api

- ### GET /api/jokes-and-images/random
- Fetches a random dad joke and image from the api appspot and Unsplash api

## Error Handling

- If an internal server error occurs, a 500 status with a message will be returned.

- For any other routes not defined, a 404 status with a "PAGE NOT FOUND" message will be returned.

## Dependencies

- Express.js
- Axios

## Running the Server

To start the server, run `npm start`. The server will be up and running at port 4000.