"use strict";

const animals = require('../models').animals;

exports.list = function (req, res) {
  animals.findAll().then(animals => {
    res.jsonp(animals);
  }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
  res.jsonp(animals.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  animals.findById(id).then(animals => {
    if (!animals) {
      return res.status(400).send({
        message: 'Animal Not Found',
      });
    }
    res.jsonp(animals);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  animals.findById(req.params.id)
    .then(animals => {
      if (!animals) {
        return res.status(400).send({
          message: 'Animal Not Found',
        });
      }
      return animals
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

exports.update = function (req, res) {
    let id = req.params.id;
    animals.findById(req.params.id)
      .then(animals => {
        if (!animals) {
          return res.status(400).send({
            message: 'Animal Not Found'
          });
        }
       animals.update(req.body, {
          where:
            { id: id }
        }).then(() => res.status(200).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }