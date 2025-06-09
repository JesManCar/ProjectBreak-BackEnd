<h1 align="center"> Project Break BackEnd (API) </h1>

![Badge In Deployment](https://img.shields.io/badge/STATUS-IN%20DEPLOYMENT%2075%-green)

## 📝 Table of Contents

- [About](#about)
- [Dependencies](#️dependencies)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Env Variables](#env_variables)

## 🧐 About <a name = "about"></a>

This is the second "big" Project in the bootcamp of __"The Bridge"__,  in this case we programming an API REST using __Express__ for the server, __Moongose__ for the databases and __Cloudinary with Multer__ for uploading images automatically.

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
```
MONGO_URI = To connect with the database in MongoDB
PORT = Setup a port (8080 usually)
ADMIN_NAME = Setup your Admin Name for Login in Visual side
ADMIN_PASSWORD = Setup your Admin Password for Login in Visual side
API_KEY = Setup your Admin Key for Login in API (JSON) side
```
Add Cloudinary credentials to ```.env```
```
CLOUDINARY_NAME = Your name of Cloudinary
CLOUDINARY_KEY = Your key of Cloudinary
CLOUDINARY_SECRET = Your secret of Cloudinary
```

Finally we could up our service with:
```
npm start
```

##📁 Project Structure (click to expand)
```
ProjectBreak-BackEnd/
│
├── config/                             # Configuration for services
│ ├── cloudinary.js
│ └── config.js 
│
├── controllers/                        # Route logic controllers
│ ├── authController.js 
│ └── productController.js 
│
├── helpers/                            # Utility and helper functions
│ ├── calculateImageUrl.js 
│ ├── productTemplate.js 
│ └── template.js 
│
├── imgs/                               # Example or static images
│ ├── camiseta-1.png
│ ├── pantalon-1.webp
│ └── zapato-1.avif
│
├── middlewares/                        # Custom Express middlewares
│ ├── authMiddleware.js 
│ └── uploadCloudinaryMiddleware.js 
│
├── models/ # Mongoose data models
│ └── Product.js 
│
├── routes/                             # API route definitions
│ ├── adminRoutes.js 
│ ├── apiRoutes.js 
│ ├── authRoutes.js 
│ └── productRoutes.js 
│
├── test/ # Unit and integration tests
│ └── productController.test.js
│
├── .env                                # Environment variables
├── .gitignore                          # Git ignore rules
├── index.js                            # App entry point
├── LICENSE                             # Project license
├── package.json                        # Project metadata and dependencies
├── package-lock.json                   # Locked dependency versions
└── README.md                           # Project documentation
```

## 🚀 Usage <a name = "usage"></a>

<h4 align="center">

![En Construccion](https://img.shields.io/badge/🚧%20Under%20Construction-20B2AA?style=for-the-badge)
</p>