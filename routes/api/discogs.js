const express = require('express');
const router = express.Router();
const discogsCtrl = require('../../controllers/discogs');



/*---------- Public Routes ----------*/
// router.post('/authorize', discogsCtrl.getAccessToken);
router.post('/login', discogsCtrl.respondToLogin);
router.get('/callback', discogsCtrl.getDiscogsAccessToken);
/*---------- Protected Routes ----------*/



module.exports = router;
