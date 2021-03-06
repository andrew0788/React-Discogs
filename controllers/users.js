
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const discogs = require('./discogs');

module.exports = {
  signup,
  login
};

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(401).json({err: 'wrong email'});
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        //Send request for users record collection
        discogs.getAlbums(user);
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'something else'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}
