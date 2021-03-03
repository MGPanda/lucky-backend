const express = require('express');

const visitController = require('../controllers/visitController');

const visitRouter = express.Router();

visitRouter.route("/")
    .get(visitController.getVisits)
    .post(visitController.postVisit);

visitRouter.route("/:id")
    .get(visitController.getVisit)
    .patch(visitController.patchVisit)
    .delete(visitController.deleteVisit);

visitRouter.route("/p/:id")
    .get(visitController.getVisitsByPet);

visitRouter.route("/u/:id")
    .get(visitController.getVisitsByUser);

module.exports = visitRouter;