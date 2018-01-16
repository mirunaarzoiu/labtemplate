"use strict";

const vets = require('../models').vets;

exports.list = function (req, res) {
  vets.findAll().then(vets => {
    res.jsonp(vets);
  }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
  res.jsonp(vets.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  vets.findById(id).then(vets => {
    if (!vets) {
      return res.status(400).send({
        message: 'Vet Not Found',
      });
    }
    res.jsonp(vets);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  vets.findById(req.params.id)
    .then(vets => {
      if (!vets) {
        return res.status(400).send({
          message: 'Vet Not Found',
        });
      }
      return vets
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

exports.update = function (req, res) {
    let id = req.params.id;
    vets.findById(req.params.id)
      .then(vets => {
        if (!vets) {
          return res.status(400).send({
            message: 'Vet Not Found'
          });
        }
       vets.update(req.body, {
          where:
            { id: id }
        }).then(() => res.status(200).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }