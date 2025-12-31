# simple-crud-app-backend


# CRUD Backend API (Node.js + Express)

This project is a simple **CRUD (Create, Read, Update, Delete) backend API** built using **Node.js**, **Express**, and **MongoDB**.  
The goal of this project is to understand the fundamentals of backend development, including request handling, middleware, and database operations.

---

## 🚀 Features

- Create new products
- Read all products or a single product
- Update existing products
- Delete products
- Proper error handling with HTTP status codes
- JSON request and response handling

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**

---

## 📂 API Endpoints

| Method | Endpoint | Description |
|------|--------|------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get a single product |
| POST | `/api/products` | Create a new product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

---

## 📦 Request Body Example

```json
{
  "name": "iPhone",
  "price": 1200
}
