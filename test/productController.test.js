require('dotenv').config();
const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const apiRoutes = require("../routes/apiRoutes");
const Product = require("../models/Product");

const app = express();
app.use(express.json());
app.use("/api", apiRoutes);

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

beforeEach(async () => {
  await Product.deleteMany();
});

describe("API Routes", () => {
  test("GET /api/products should return empty array", async () => {
    const res = await request(app).get("/api/products").set("x-api-key", process.env.API_KEY || "testkey");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  test("POST /api/create should create a new product", async () => {
    const res = await request(app)
      .post("/api/create")
      .set("x-api-key", process.env.API_KEY || "testkey")
      .set("Content-Type", "multipart/form-data")
      .field("name", "Gorra")
      .field("description", "Deportiva")
      .field("category", "Accesorios")
      .field("size", "M")
      .field("price", 15)
      //.attach("image", Buffer.from("test image"), "test.jpg");

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Gorra");
  });

  test("GET /api/products/:cat should filter by category", async () => {
    await Product.create({
      name: "Zapato",
      description: "Cuero",
      image: "image.jpg",
      category: "Zapatos",
      size: "L",
      price: 45
    });

    const res = await request(app)
      .get("/api/products/Zapatos")
      .set("x-api-key", process.env.API_KEY || "testkey");

    expect(res.statusCode).toBe(200);
    expect(res.body[0].category).toBe("Zapatos");
  });

  test("GET /api/product/:id should return specific product", async () => {
    const product = await Product.create({
      name: "Pantalón",
      description: "Jean",
      image: "img.jpg",
      category: "Pantalones",
      size: "L",
      price: 30
    });

    const res = await request(app)
      .get(`/api/product/${product._id}`)
      .set("x-api-key", process.env.API_KEY || "testkey");

    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBe(product._id.toString());
  });

  test("GET /api/edit/:id should update product", async () => {
    const product = await Product.create({
      name: "Camiseta",
      description: "Algodón",
      image: "img.jpg",
      category: "Camisetas",
      size: "S",
      price: 25
    });

    const res = await request(app)
      .get(`/api/edit/${product._id}`)
      .set("x-api-key", process.env.API_KEY || "testkey")
      .field("name", "Camiseta Actualizada")
      .field("description", "Algodón Actualizado");

    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBe(product._id.toString());
  });
});
