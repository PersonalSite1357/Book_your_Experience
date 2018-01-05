var express = require('express');
var router = express.Router();
const passport = require('passport');

<<<<<<< HEAD
// router.get('/login', (req, res) => {
//   res.render('./auth/login')
// });
=======

//console.log('james');

router.get('/login', (req, res, err) => {
	if(err){
		console.log(err);

	}

	res.render('./auth/login');
});
>>>>>>> f59e95e9eb8d433fe253ebb5d70343986da38889

// auth logout
router.get('/logout', (req, res) => {
	//handle with passport
	req.logout();
	res.redirect('/');
});

//auth with google
router.get('/google', passport.authenticate('google', {
	scope: ['profile']
}));
//auth with fb
router.get('/facebook', passport.authenticate("facebook", {
  scope: ['public_profile', 'email']
}), function (req, res) {
  console.log('At least we go to the callback for the route.');
});
//callback route for fb redirect
router.get('/facebook/redirect', passport.authenticate('facebook', {failureRedirect: '/'}),(req, res) => {
  // res.send(req.user)
  // console.log(req.query.code);
  res.redirect('/profile/')
});

//callback route for goolge redirect
router.get('/google/redirect', passport.authenticate('google'),(req, res) => {
	// res.send(req.user)
	res.redirect('/profile/');
});


module.exports = router;
