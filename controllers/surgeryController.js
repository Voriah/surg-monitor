var db = require('../models');

module.exports = {
  findAll: function (req, res) {
    db.Surgery.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function (req, res) {
    // find record base on user name
    db.Surgery.findOne({ name: { $eq: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findWhere: function (req, res) {
    db.Surgery
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Surgery
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Surgery
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUpdate: function (req, res) {
    // body has the user
    let surgery = req.body;
    // Create or Update
    db.Surgery.findOne({ name: { $eq: surgery.name } })
      .then((r) => {
        if (r === null) {
          // create
          db.Surgery.create(surgery)
            .then(() => res.sendStatus(200))
            .catch(err => res.status(422).json(err));
        } else {
          // Update
          db.Surgery.updateOne({ name: { $eq: surgery.name } }, { $set: surgery })
            .then(() => res.sendStatus(200))
            .catch(err => res.status(422).json(err));
        }
      })
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    // body has the user
    let surgery = req.body;
    // Update
    db.Surgery
      .findOneAndUpdate({ _id: req.params.id }, surgery)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Surgery
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
