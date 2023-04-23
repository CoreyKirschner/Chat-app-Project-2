const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const questionsData = await Question.findAll();
    const questions = questionsData.map(question => question.get({ plain: true }));
    res.render('questions', { questions });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/questions', async (req, res) => {
  try {
    const questionsData = await Question.findAll();

    if (!questionsData) {
      res.status(404).json({ message: 'No questions found!' });
      return;
    }

    res.status(200).json(questionsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/questions', async (req, res) => {
  try {
    const question =  await Question.create({
      title: req.body.title,
      content: req.body.content
    });
    res.status(201).json(question);
  } catch (err) {
    res.status(400).json(err);
  }
});

// other routes for updating, deleting, etc

module.exports = router;