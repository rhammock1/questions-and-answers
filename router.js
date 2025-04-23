const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(`User UUID: ${req.user_uuid}`);
  res.send('Welcome to the Express server!');
  // TODO:
  //  Get available questions and HTML template to send to the client
});

router.route('/questions')
  .get((req, res) => {
  // GET available questions
  })
  .post((req, res, next) => {
  // submit a new question
  });

router.route('/questions/:question_id')
  .get((req, res) => {
  // GET a specific question by ID
  })
  .put((req, res) => {
  // update a specific question by ID
  });

router.route('/questions/:question_id/answers')
  .get((req, res) => {
  // GET answers for a specific question
  })
  .post((req, res) => {
  // submit a new answer for a specific question
  });

module.exports = {router};

