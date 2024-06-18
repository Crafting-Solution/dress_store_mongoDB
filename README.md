# Dress Store Application

## Overview
The Dress Store Application is an API built with Node.js, Express.js, and MongoDB that allows you to manage products and categories for a dress store. This application supports creating, reading, updating, and deleting products and categories, with a focus on ensuring that products belong to predefined categories (men, women, teens).

## Features
- Add, update, delete, and view products.
- Add, update, delete, and view categories.
- Search for products by name.
- Ensure products belong to allowed categories (men, women, teens).

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed on your machine.
- MongoDB Atlas account or a local instance of MongoDB running.
- A `.env` file configured with your MongoDB connection string.

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/dress-store-app.git
    cd dress-store-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
    ```sh
    touch .env
    echo "MONGODB_URI=mongodb+srv://yourusername:yourpassword@cluster.mongodb.net/marketplace?retryWrites=true&w=majority" >> .env
    echo "PORT=4000" >> .env
    ```

## Usage
To start the server:
```sh
npm start

The API will be accessible at http://localhost:4000.

Endpoints
Products
Add a New Product
URL: /api/product
Method: POST
Description: Adds a new product.
Request Body:
json
Copy code
{
  "name": "Dress Name",
  "description": "A beautiful dress",
  "price": 99.99,
  "quantity": 10,
  "category": "women"
}
Success Response:
Code: 201 Created
Content:
json
Copy code
{
  "_id": "60c72b2f4f1a2c001c8e4e36",
  "name": "Dress Name",
  "description": "A beautiful dress",
  "price": 99.99,
  "quantity": 10,
  "category": "women",
  "__v": 0
}
Error Response:
Code: 400 Bad Request
Content:
json
Copy code
{
  "error": "Categories can only include men, women, or teens"
}
Get All Products
URL: /api/product
Method: GET
Description: Retrieves all products.
Success Response:
Code: 200 OK
Content:
json
Copy code
[
  {
    "_id": "60c72b2f4f1a2c001c8e4e36",
    "name": "Dress Name",
    "description": "A beautiful dress",
    "price": 99.99,
    "quantity": 10,
    "category": "women",
    "__v": 0
  },
  ...
]
Get Product by ID
URL: /api/product/:id
Method: GET
Description: Retrieves a product by ID.
Success Response:
Code: 200 OK
Content:
json
Copy code
{
  "_id": "60c72b2f4f1a2c001c8e4e36",
  "name": "Dress Name",
  "description": "A beautiful dress",
  "price": 99.99,
  "quantity": 10,
  "category": "women",
  "__v": 0
}
Error Response:
Code: 404 Not Found
Content:
json
Copy code
{
  "error": "Product not found"
}
Update Product by ID
URL: /api/product/:id
Method: PUT
Description: Updates a product by ID.
Request Body:
json
Copy code
{
  "name": "Updated Dress Name",
  "description": "An updated description",
  "price": 109.99,
  "quantity": 5,
  "category": "women"
}
Success Response:
Code: 200 OK
Content:
json
Copy code
{
  "_id": "60c72b2f4f1a2c001c8e4e36",
  "name": "Updated Dress Name",
  "description": "An updated description",
  "price": 109.99,
  "quantity": 5,
  "category": "women",
  "__v": 0
}
Error Response:
Code: 400 Bad Request
Content:
json
Copy code
{
  "error": "Categories can only include men, women, or teens"
}
Delete Product by ID
URL: /api/product/:id
Method: DELETE
Description: Deletes a product by ID.
Success Response:
Code: 200 OK
Content:
json
Copy code
{
  "message": "Product deleted successfully"
}
Error Response:
Code: 404 Not Found
Content:
json
Copy code
{
  "error": "Product not found"
}
Delete All Products
URL: /api/product
Method: DELETE
Description: Deletes all products.
Success Response:
Code: 200 OK
Content:
json
Copy code
{
  "message": "All products deleted successfully"
}
Find Products by Name
URL: /api/product/search
Method: GET
Description: Finds products by name.
Query Parameters:
name (required): The name to search for.
Success Response:
Code: 200 OK
Content:
json
Copy code
[
  {
    "_id": "60c72b2f4f1a2c001c8e4e36",
    "name": "Festus Dress",
    "description": "A beautiful dress",
    "price": 99.99,
    "quantity": 10,
    "category": "women",
    "__v": 0
  },
  ...
]
Categories
Add a New Category
URL: /api/category
Method: POST
Description: Adds a new category.
Request Body:
json
Copy code
{
  "name": "Men"
}
Success Response:
Code: 201 Created
Content:
json
Copy code
{
  "_id": "60c72b2f4f1a2c001c8e4e36",
  "name": "Men",
  "__v": 0
}
Error Response:
Code: 400 Bad Request
Content:
json
Copy code
{
  "error": "Categories can only include men, women, or teens"
}
Get All Categories
URL: /api/category
Method: GET
Description: Retrieves all categories.
Success Response:
Code: 200 OK
Content:
json
Copy code
[
  {
    "_id": "60c72b2f4f1a2c001c8e4e36",
    "name": "Men",
    "__v": 0
  },
  ...
]
Get Category by ID
URL: /api/category/:id
Method: GET
Description: Retrieves a category by ID.
Success Response:
Code: 200 OK
Content:
json
Copy code
{
  "_id": "60c72b2f4f1a2c001c8e4e36",
  "name": "Men",
  "__v": 0
}
Error Response:
Code: 404 Not Found
Content:
json
Copy code
{
  "error": "Category not found"
}
Update Category by ID
URL: /api/category/:id
Method: PUT
Description: Updates a category by ID.
Request Body:
json
Copy code
{
  "name": "Women"
}
Success Response:
Code: 200 OK
Content:
json
Copy code
{
  "_id": "60c72b2f4f1a2c001c8e4e36",
  "name": "Women",
  "__v": 0
}