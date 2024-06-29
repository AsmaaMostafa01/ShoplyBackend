# ShoplyBackend
## Shoply

Shoply is an e-commerce website that offers new and pre-owned products. Additionally, we promote sustainability by encouraging the reuse and recycling of goods, helping to reduce waste and positively impact the environment.

## Features

- User registration and authentication
- Product listing and browsing
- Adding products to the cart
- Contact page for inquiries
- User account management
- Payment method management
## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
## Installation

1. **Clone the repository of frontend**:

    ```sh
    git clone https://github.com/AsmaaMostafa01/Shoply_Website.git
    ```
2.**Navigate to the project directory**:

    ```sh
    cd Shoply
    ```
3. **Install dependencies for the backend**:

    ```sh
    cd backend
    npm install
    ```
## Running the Project
--> **Clone the repository of BackEnd**:

    ```sh
    git clone https://github.com/AsmaaMostafa01/ShoplyBackend.git
    ```
### Backend

1. **Create a `.env` file in the `backend` directory** and add the following environment variables:

    ```plaintext
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

2. **Start the backend server**:

    ```sh
    npm start
    ```
### Frontend

1. **Start the frontend development server**:

    ```sh
    npm start
    ```

2. **Open your browser** and navigate to `http://localhost:3000`.

## API Endpoints

### Auth

- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Log in a user

### Users

- `GET /api/users/me`: Get current user details

### Products

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a single product by ID
### Edit account
- `PUT /api/myaccount` :edit your profile by adding token header and edit body
### Contact Us
-`POST /api/contacts` : write the message or problems to us
-`GET//api/contacts`: get all contacts messages 
## Contributing

1. **Fork the repository**.
2. **Create a new branch**: `git checkout -b feature/your-feature-name`.
3. **Commit your changes**: `git commit -m 'Add some feature'`.
4. **Push to the branch**: `git push origin feature/your-feature-name`.
5. **Open a pull request**.
