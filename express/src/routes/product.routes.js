import express from "express";

const router = express.Router();
const products = [];

// Helper function to keep response formatting consistent.
const sendResponse = (res, statusCode, message, success, data = null) => {
  res.status(statusCode).json({
    message,
    success,
    data,
  });
};

// GET /products
// Return every product stored in memory.
router.get("/", (req, res) => {
  res.status(200).json({
    message: "products fetched",
    success: true,
    data: products,
  });
});

// GET /products/:id
// Find one product using its ID.
router.get("/:id", (req, res) => {
  const productId = Number(req.params.id);

  if (Number.isNaN(productId)) {
    sendResponse(res, 400, "invalid product id", false, null);
    return;
  }

  const product = products.find((item) => item._id === productId);

  if (!product) {
    sendResponse(res, 404, "product not found", false, null);
    return;
  }

  sendResponse(res, 200, `product with id ${productId} fetched`, true, product);
});

// POST /products
// Create a new product from the request body.
router.post("/", (req, res) => {
  const { name, price, brand } = req.body;

  if (!name || !price || !brand) {
    sendResponse(res, 400, "name, price, and brand are required", false, null);
    return;
  }

  const newProduct = {
    _id: products.length + 1,
    name,
    price,
    brand,
    createdAt: new Date().toISOString(),
  };

  products.push(newProduct);
  sendResponse(res, 201, "product created successfully", true, newProduct);
});

// PUT /products/:id
// Update an existing product with any supplied fields.
router.put("/:id", (req, res) => {
  const productId = Number(req.params.id);

  if (Number.isNaN(productId)) {
    sendResponse(res, 400, "invalid product id", false, null);
    return;
  }

  const index = products.findIndex((item) => item._id === productId);

  if (index === -1) {
    sendResponse(res, 404, "product not found", false, null);
    return;
  }

  const updatedProduct = { ...products[index] };

  if (req.body.name !== undefined) updatedProduct.name = req.body.name;
  if (req.body.price !== undefined) updatedProduct.price = req.body.price;
  if (req.body.brand !== undefined) updatedProduct.brand = req.body.brand;

  products[index] = updatedProduct;
  sendResponse(res, 200, "product updated successfully", true, products[index]);
});

// DELETE /products/:id
// Remove a product from the memory array.
router.delete("/:id", (req, res) => {
  const productId = Number(req.params.id);

  if (Number.isNaN(productId)) {
    sendResponse(res, 400, "invalid product id", false, null);
    return;
  }

  const index = products.findIndex((item) => item._id === productId);

  if (index === -1) {
    sendResponse(res, 404, "product not found", false, null);
    return;
  }

  products.splice(index, 1);
  sendResponse(res, 200, "product deleted successfully", true, null);
});

export default router;
