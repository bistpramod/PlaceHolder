cns// controllers/product.controllers.js

const products = [];

export const getAll = (req, res) => {
  res.status(200).json({
    message: "products fetched",
    success: true,
    data: products,
  });
};

export const getById = (req, res) => {
  const { id } = req.params;

  const product = products.find((product) => product._id === Number(id));

  if (!product) {
    res.status(404).json({
      message: "product not found",
      success: false,
      data: null,
    });
    return;
  }

  res.status(200).json({
    message: `product by id ${id} fetched`,
    success: true,
    data: product,
  });
};