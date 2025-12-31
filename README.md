# Simple CRUD Backend API

This project is a simple **CRUD (Create, Read, Update, Delete) backend API** built using **Node.js**, **Express**, and **MongoDB**.  
The purpose of this project is to understand the fundamentals of backend development, including routing, middleware, and database operations.

---

## 🚀 Features

- Create new products
- Read all products or a single product
- Update existing products
- Delete products
- Proper error handling using HTTP status codes
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
```

---

## ⚙️ Setup & Run Locally

1. Clone the repository
```bash
git clone <your-repo-url>
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add:
```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

4. Start the server
```bash
npm start
```

The server will run at:
```
http://localhost:3000
```

---

## 🧪 Testing the API

You can test the API using tools like **Insomnia**, **Postman**, or **Thunder Client** by sending HTTP requests to the endpoints listed above.

---

## 🎯 Learning Outcome

This project helped me understand:
- How REST APIs work
- How Express routes handle requests
- How middleware like `express.json()` works
- How to perform CRUD operations using MongoDB and Mongoose
