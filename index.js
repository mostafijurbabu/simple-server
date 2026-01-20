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
];

const app = express();
const PORT = process.env.PORT || 4000;

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
