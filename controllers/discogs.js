const User = require('../models/user');
const Record = require('../models/record')
const Discogs = require('disconnect').Client;
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


const request = require('request');
const mongoose = require('mongoose');


module.exports={
  getDiscogsRequestToken,
  getDiscogsAccessToken,
  respondToLogin,
  getAlbums
}

async function respondToLogin(req, res){
  let discogsUser = req.body.discogsUser;
  try{
    const records = await getAlbums(discogsUser)
    console.log(records);
  }catch(err){
    console.log(err);
  }
}

async function getAlbums(req, res){
  let col = new Discogs().user().collection();
  let results= [];
  col.getReleases(req.name, 0, {page: 1, per_page: 10000})
    .then(data => console.log(data))
      .catch(err => console.log(err))
}

function getDiscogsRequestToken(req, res){
  console.log(req.body);
  oAuth.getRequestToken(
    process.env.REACT_APP_DISCOGS_OAUTH_CONSUMER_KEY,
    process.env.REACT_APP_DISCOGS_OAUTH_CONSUMER_SECRET,
    'http://localhost:3001/api/discogs/callback',
    function(err, requestData){
      loginURL= requestData.authorizeUrl
      res.json(loginURL)
    }
  )
}

function getDiscogsAccessToken(req, res){
  console.log('Get access');
  oAuth.getAccessToken(
    req.query.oauth_verifier,
    function(err, accessData){
      console.log(accessData);
      res.send('access data')
    }
  )
}

function saveRecords(records, user){
  console.log(user);
  records.releases.forEach(instance => {
    let recordInfo = instance.basic_information;
      let newRecord = new Record();
      newRecord.masterID = recordInfo.master_id;
      newRecord.title = recordInfo.title;
      newRecord.year  = recordInfo.year;
      newRecord.artist = recordInfo.artists[0].name;
    })
}

function createJWT(payload) {
  return jwt.sign(
    {payload},
    SECRET,
    {expiresIn: '15m'}
  );
}
