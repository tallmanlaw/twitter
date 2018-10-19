const db = require('../models');

module.exports = function (app) {
  app.get('/api/tweet', function (req, res) {
    db.Tweet.find({})
      .then(function (tweet) {
        res.json(tweet);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
  app.get('/api/tweet/:id', function (req, res) {
      db.Tweet.deleteOne({_id: req.params.id})
      .then(function () {
          res.json({success: true});
      })
      .catch(function (err) {
          res.json(err);
      })
  })

  app.post('/api/tweet', function (req, res) {
    db.Tweet.create(req.body)
      .then(function (tweet) {
        res.json(tweet);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
 }