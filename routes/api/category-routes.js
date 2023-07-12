const router = require('express').Router();
const { Category, Product } = require('../../../fantastic-umbrella/Develop/models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categories = Category.findAll({
    include: [Product],
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const category = Category.findByPk(categoryId, {
    include: [Product],
  });
});

router.post('/', (req, res) => {
  // create a new category
  const category = Category.create({Name, description});
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  const categoryId = req.params.id;
  const { name, description } = req.body;
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  const categoryId = req.params.id;
  category.destroy();
});

module.exports = router;
