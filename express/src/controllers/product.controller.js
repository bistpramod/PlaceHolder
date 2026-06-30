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

export const create = (req, res) => {
  const { name, price, brand } = req.body;

  products.push({
    name,
    brand,
    price,
    createdAt: new Date(Date.now()),
    _id: products.length + 1,
  });

  res.status(201).json({
    message: `product created`,
    success: true,
    data: products[products.length - 1],
  });
};

export const update = (req, res) => {
  res.status(200).json({
    message: `product updated`,
    success: true,
    data: {},
  });
};

export const remove = (req, res) => {
  res.status(200).json({
    message: `product deleted`,
    success: true,
    data: null,
  });
};