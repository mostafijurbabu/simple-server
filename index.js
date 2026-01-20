const express = require("express");
const cors = require("cors");

const items = [
  {
    id: 1,
    name: "Laptop",
    description: "High performance laptop",
    price: 50000,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest model smartphone",
    price: 30000,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling headphones",
    price: 5000,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    name: "Smartwatch",
    description: "Fitness tracking smartwatch",
    price: 7000,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 5,
    name: "Tablet",
    description: "10-inch display tablet",
    price: 20000,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 6,
    name: "Camera",
    description: "Digital SLR camera",
    price: 40000,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 7,
    name: "Printer",
    description: "Wireless color printer",
    price: 8000,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 8,
    name: "Router",
    description: "High-speed WiFi router",
    price: 3000,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 9,
    name: "Monitor",
    description: "24-inch HD monitor",
    price: 12000,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 10,
    name: "Keyboard",
    description: "Mechanical keyboard",
    price: 3500,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 11,
    name: "Mouse",
    description: "Wireless optical mouse",
    price: 1500,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 12,
    name: "External Hard Drive",
    description: "1TB portable hard drive",
    price: 6000,
    image: "https://via.placeholder.com/300",
  },
];

const app = express();
app.use(cors());
app.use(express.json());

// GET all items
app.get("/items", (req, res) => {
  res.json(items);
});

// GET single item
app.get("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((i) => i.id === id);

  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.json(item);
});

// POST add item
app.post("/items", (req, res) => {
  const newItem = { id: items.length + 1, ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
});

module.exports = app;
