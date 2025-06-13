<h1 align="center"> Project Break BackEnd (API) </h1>

![Badge In Deployment](https://img.shields.io/badge/STATUS-IN%20DEPLOYMENT%20-green)

## 📝 Table of Contents

- [About](#about)
- [Dependencies](#️dependencies)
- [Deployment](#deployment)
- [Project Structure](#structure)
- [Usage](#usage)
- [Documentation](#documentation)
- [Testing](#testing)
- [Env Variables](#env_variables)
- [Built Using](#built_using)

## 🧐 About <a name = "about"></a>

Project Break - BackEnd is a REST API developed as part of the second major project at the full-stack bootcamp by The Bridge.

Its purpose is to simulate a real-world backend for an e-commerce platform, where products are managed, categorized, displayed, and updated both via API and visual admin interfaces. It focuses on clean architecture, security, and API usability.

## ⚒️ Dependencies <a name = "dependiencies"></a>

![Express](https://img.shields.io/badge/Express-5.1.0-blue)
![express-session](https://img.shields.io/badge/Express%20session-1.18.1-blue)
![dotenv](https://img.shields.io/badge/Dotenv-16.5.0-blue)
![cloudinary](https://img.shields.io/badge/Cloudinary-1.41.3-blue)
![multer](https://img.shields.io/badge/Multer-2.0.0-blue)


![Multer_Storage](https://img.shields.io/badge/Multer%20Storage%20Cloudinary-4.0.0-blue)
![Axios](https://img.shields.io/badge/Axios-1.9.0-blue)
![cors](https://img.shields.io/badge/Cors-2.8.5-blue)
![method_override](https://img.shields.io/badge/Method%20Override-3.0.0-blue)
![Moongose](https://img.shields.io/badge/Moongose-1.0.0-blue)

## ⛏️ Deployment <a name = "getting_started"></a>

Clone the repository:
``` 
git clone https://github.com/JesManCar/ProjectBreak-BackEnd
```
Install dependencies:
```
npm i
```
Create and configure an ```.env``` file for environment variables
- [Env Variables](#env_variables)

Finally we could up our service with:
```
npm start
```

## 📁 Project Structure <a name = "structure"></a>
```
📦 ProjectBreak-BackEnd/
├── 🛠️ config/                     # Configuration files
│   ├── ☁️ cloudinary.js
│   └── ⚙️ config.js
│
├── 🎮 controllers/                # Route logic
│   ├── 🔐 authController.js
│   └── 📦 productController.js
│
├── 🧰 helpers/                    # Utility functions
│   ├── 🧮 calculateImageUrl.js
│   ├── 🧾 productTemplate.js
│   └── 🧱 template.js
│
├── 🖼️ imgs/                      # Sample images
│   ├── 👕 camiseta-1.png
│   ├── 👖 pantalon-1.webp
│   └── 👟 zapato-1.avif
│
├── 🧪 middlewares/               # Express middlewares
│   ├── 🔐 authMiddleware.js
│   └── ☁️ uploadCloudinaryMiddleware.js
│
├── 🧬 models/                    # Mongoose models
│   └── 📦 Product.js
│
├── 🌐 routes/                    # Express route handlers
│   ├── 🧑‍💼 adminRoutes.js
│   ├── 🌍 apiRoutes.js
│   ├── 🔐 authRoutes.js
│   └── 📦 productRoutes.js
│
├── 📄 docs/                      # Swagger documentation setup
│   ├── 🧾 basicInfo.js
│   ├── 🧩 components.js
│   ├── 🔚 endpoints.js
│   ├── 📚 index.js
│   └── 🧱 middlewares.js
│
├── 🧪 test/                      # Testing
│   └── 🧪 productController.test.js
│
├── 📄 .env                       # Environment variables
├── 🗑️ .gitignore                # Files to ignore by Git
├── 🚀 index.js                  # App entry point
├── 🪪 LICENSE                   # License file
├── 📦 package.json              # Project metadata
├── 🔒 package-lock.json         # Dependency lock file
└── 📝 README.md                 # Project documentation
```

## 📡 Endpoints

### API Endroutes
| Method | Route                     | Description                                 | Middleware               |
|--------|---------------------------|---------------------------------------------|--------------------------|
| GET    | /api/products             | Get all products (JSON)                     | -                        |
| GET    | /api/products/:cat        | Get products by category (JSON)             | -                        |
| GET    | /api/product/:id          | Get single product by ID (JSON)             | -                        |
| POST   | /api/create               | Create product (JSON + image)               | authApiMiddleware        |
| GET    | /api/edit/:id             | Edit product by ID (JSON + image)           | authApiMiddleware        |

### Users Endroutes (With Frontend)
| Method | Route                     | Description                                 | Middleware               |
|--------|---------------------------|---------------------------------------------|--------------------------|
| GET    | /products                 | Get all products (HTML)                     | -                        |
| GET    | /products/:cat            | Get products by category (HTML)             | -                        |
| GET    | /product/:id              | Get single product by ID (HTML)             | -                        |

### Admin Endroutes (With Frontend)
| Method | Route                     | Description                                 | Middleware               |
|--------|---------------------------|---------------------------------------------|--------------------------|
| GET    | /admin/products           | Admin view of all products                  | authMiddleware|
| GET    | /admin/products/:cat      | Admin view of products by category          |  authMiddleware                      |
| GET    | /admin/product/:id        | Admin view of single product                | authMiddleware                        |
| GET    | /admin/product/edit/:id   | Admin product edit form                     | authMiddleware                       |
| PUT    | /admin/edit/:id           | Update product info                         | authMiddleware                        |
| GET    | /admin/new                | Admin create product form                   | authMiddleware                        |
| POST   | /admin/create             | Create product (form-data + image)          | uploadMiddleware, authMiddleware         |
| GET    | /admin/delete/:id         | View delete confirmation                    | authMiddleware                        |
| DELETE | /admin/delete/:id         | Delete product                              | authMiddleware                        |

### Login Endroutes (With Frontend)
| Method | Route                     | Description                                 | Middleware               |
|--------|---------------------------|---------------------------------------------|--------------------------|
| GET    | /login                    | Login page (form)                           | -                        |
| POST   | /login/auth               | Submit login credentials                    | -                        |
| GET    | /login/out                | Logout and clear session                    | -                        |


## 🚀 Usage <a name = "usage"></a>

Once the server is running, you can:

- Access the main API at: `http://localhost:8080/api` with Software like Postman.
- Access with an explorer fronted at: `http://localhost:8080/` to see all the products. (Users View)
- Access with an explorer fronted at: `http://localhost:8080/admin` to see all the products, create or edit them. (Admin View with Credentials)

## 📚 Documentation <a name = "documentation"></a>

This project includes auto-generated API documentation using **Swagger**. Once the server is up, visit:

```
http://localhost:8080/api/docs
```

It provides descriptions, parameters, responses, and testing capabilities for each endpoint.

## 🧪 Testing <a name = "testing"></a>

Tests are written using **Jest** and **Supertest** for controller and route validation.

To run the tests:
```bash
npm test
```

These include unit tests for controller logic and integration tests for key endpoints.

## 🌐 Built Using <a name = "built_using"></a>

- Node.js
- Express
- MongoDB & Mongoose
- Cloudinary & Multer
- Swagger
- Jest & Supertest


## 🫣 .ENV (Env Variables) <a name = "env_variables"></a>

&emsp;&emsp;⚠️ **Disclaimer:** All environment variables shown here are for educational and practice purposes only. This is a student project, and no real credentials or private keys are used. Including them in the README is safe and intentional to help reviewers or other students understand the project setup.

To run this project, create a `.env` file at the root with the following variables:

```
# MongoDB connection string
MONGO_URI="mongodb+srv://youruser:yourpassword@cluster0.awolzzv.mongodb.net/Shop_Products"

# Server port
PORT=8080

# Admin login credentials (for frontend visual access)
ADMIN_NAME=admin
ADMIN_PASSWORD=admin1234

# API Key (for api access to restricted endpoints)
API_KEY=secret_api_key_here

# Cloudinary credentials (for image upload functionality)
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
```
#

📌 Project made with ❤️ during the bootcamp at <strong>The Bridge</strong>.
