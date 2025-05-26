# LittleLinks URL Shortener

LittleLinks is a full-stack URL shortener application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to shorten long URLs and manage them efficiently.

## Features

- Shorten long URLs into concise, shareable links.
- View and manage shortened URLs.
- Responsive and user-friendly interface.
- Backend API for URL shortening and retrieval.

## Project Structure

```
BACKEND/
  app.js
  package.json
  src/
    config/
    controllers/
    dao/
    models/
    routes/
    services/
    utils/
FRONTEND/
  eslint.config.js
  index.html
  package.json
  vite.config.js
  public/
  src/
    api/
    components/
    pages/
    utils/
```

## Tech Stack

### Frontend
- React
- Vite
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

## Installation

### Prerequisites
- Node.js and npm installed on your system.
- MongoDB instance running locally or in the cloud.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/divyanshnext/Littlelinks-url-shortener.git
   cd littlelinks-url-shortener-mern
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd BACKEND
   npm install
   cd ../FRONTEND
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the `BACKEND` directory and add the following:
     ```env
     MONGO_URI=your-mongodb-connection-string
     PORT=5000
     ```

4. Start the backend server:
   ```bash
   cd BACKEND
   npm start
   ```

5. Start the frontend development server:
   ```bash
   cd FRONTEND
   npm run dev
   ```

6. Open the application in your browser at `http://localhost:5173`.

## Deployment

- Frontend can be deployed using platforms like Vercel or Netlify.
- Backend can be deployed using platforms like Render or Heroku.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- Inspired by the need for simple and efficient URL shortening services.
- Built with love using the MERN stack.
