# ShoppyGlobe Backend API

A RESTful Backend API for the ShoppyGlobe E-commerce Application built using Node.js, Express.js, MongoDB Atlas, JWT Authentication, and Thunder Client.

Github link: https://github.com/ramrohith999/shoppyglobe-backend.git


## Project Objective

This project provides backend services for the ShoppyGlobe E-commerce Application.

Features include:

- User Registration
- User Login
- JWT Authentication
- Product APIs
- Shopping Cart APIs
- MongoDB Atlas Integration
- API Validation
- Error Handling

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- Thunder Client
- dotenv

---

## Project Structure

backend/

├── config/

├── controllers/

├── middleware/

├── models/

├── routes/

├── screenshots/

├── .env

├── .gitignore

├── package.json

├── server.js

└── readme.md

---

## MongoDB Collections

### Products Collection

Fields:

- name
- price
- description
- stockQuantity

### Users Collection

Fields:

- name
- email
- password

### Cart Collection

Fields:

- userId
- productId
- quantity

---

# API Endpoints

## Authentication APIs

### Register User

POST /register

Request:

```json
{
  "name": "Ram",
  "email": "ram@gmail.com",
  "password": "123456"
}
```

Response:

```json
{
  "message": "User registered successfully"
}
```

---

### Login User

POST /login

Request:

```json
{
  "email": "ram@gmail.com",
  "password": "123456"
}
```

Response:

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

---

## Product APIs

### Get All Products

GET /products

Returns all products stored in MongoDB.

---

### Get Product By ID

GET /products/:id

Returns a single product based on Product ID.

---

## Cart APIs (Protected Routes)

Authorization Header Required:

```txt
Bearer JWT_TOKEN
```

---

### Add Product To Cart

POST /cart

Request:

```json
{
  "productId": "PRODUCT_ID",
  "quantity": 2
}
```

---

### Get Cart Items

GET /cart

Returns all cart items for logged-in user.

---

### Update Cart Quantity

PUT /cart/:id

Request:

```json
{
  "quantity": 5
}
```

---

### Delete Cart Item

DELETE /cart/:id

Deletes a cart item.

---

# Validation Implemented

### User Validation

- Duplicate email check
- Invalid credentials handling

### Product Validation

- Product existence verification

### Cart Validation

- Quantity cannot be less than 1
- Protected routes require JWT token

---

# Error Handling

Implemented global error handling for:

- Invalid product IDs
- Missing JWT tokens
- Unauthorized access
- Duplicate users
- Invalid login credentials
- Invalid quantity values
- Database errors

---

# MongoDB Screenshots

## Products Collection

screenshots/mongodb_products.png

## Users Collection

screenshots/mongodb_users.png

## Cart Collection

screenshots/mongodb_carts.png

---

# Thunder Client Testing Screenshots

## Register User Success

screenshots/register_success.png

## Duplicate User Validation

screenshots/duplicate_user.png

## Login Success

screenshots/login_success.png

## Protected Route Access

screenshots/protected_route.png

## Get Products

screenshots/get_products.png

## Get Product By ID

screenshots/get_productsbyid.png

## Add To Cart

screenshots/add_to_cart.png

## Get Cart

screenshots/get_cart.png

## Update Cart

screenshots/update_cart.png

## Quantity Validation

screenshots/quantity_validation.png

## Delete Cart

screenshots/delete_cart.png

## Unauthorized Access

screenshots/unauthorizd_access.png

---

# Installation

Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

Navigate to Project

```bash
cd backend
```

Install Dependencies

```bash
npm install
```

Create .env File

```env
MONGO_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
PORT=5000
```

Run Server

```bash
npm run dev
```

Server will run on:

```txt
http://localhost:5000
```
