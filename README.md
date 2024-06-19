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
