//* get all
//* get by id
//* create update and delete stuff

const categories = [];

export const getAll = (req, res) => {
  res.status(200).json({
    message: "categories fetched",
    success: true,
    data: categories,
  });
};

export const getById = (req, res) => {
  const { id } = req.params;

  const category = categories.find(
    (category) => category._id === Number(id)
  );

  if (!category) {
    res.status(404).json({
      message: "category not found",
      success: false,
      data: null,
    });
    return;
  }

  res.status(200).json({
    message: `category by id ${id} fetched`,
    success: true,
    data: category,
  });
};

export const create = (req, res) => {};

export const update = (req, res) => {};

export const remove = (req, res) => {};