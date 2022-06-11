const router = require('express').Router();
const { Category, Product } = require('../../models');
const { findAll } = require('../../models/ProductTag');

// The `/api/categories` endpoint


router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    attributes: [
      'id',
      'category_name'
    ],
  // be sure to include its associated Products
    include: [
      {
         model: Product,
         attributes: [
          'id',
          'product_name',
          'price',
          'stock',
          'category_id'
         ]
    }]
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })}
);


router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id 
    },
  // be sure to include its associated Products
    include: [
      {
         model: Product,
         attributes: [
          'id',
          'product_name',
          'price',
          'stock',
          'category_id'
         ]
      }]
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.json(404).json({ message: 'No category found with this id'});
      return;
    }
    res.json(dbCategoryData);
    })
    .catch(err=> {
      console.log(err);
      res.json(500).json(err);
    })
});


router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err);
  });
});


router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
      where: {
        id: req.params.id
      }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No category found with this id'});
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});


router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy(
    {
      where: {
        id: req.params.id
      }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No category found with this id'});
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

});

module.exports = router;