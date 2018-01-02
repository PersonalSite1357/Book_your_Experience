var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/login', (req, res) => {
  res.render('./auth/login')
});

//auth logout
router.get('/logout', (req, res) => {
  //handle with passport
  req.logout();
  res.redirect('/')
});

//auth with google
router.get('/google', passport.authenticate("google", {
  scope: ['profile']
}));

//callback route for goolge redirect
router.get('/google/redirect', passport.authenticate('google'),(req, res) => {
  // res.send(req.user)
  res.redirect('/profile/')
});


module.exports = router;
