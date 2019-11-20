const User = require('../models/user');
const Record = require('../models/record')
const Discogs = require('disconnect').Client;
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


const request = require('request');
const mongoose = require('mongoose');


module.exports={
  getAlbums
}


async function getAlbums(user, res){
  let col = new Discogs({
    consumerKey: process.env.REACT_APP_DISCOGS_OAUTH_CONSUMER_KEY,
    consumerSecret: process.env.REACT_APP_DISCOGS_OAUTH_CONSUMER_SECRET
  }).user().collection();
  col.getReleases(user.name, 0, {page: 1, per_page: 75})
    .then(collection => checkRecords(collection, user))
    .catch(err => console.log(err))
}


function checkRecords(collection, user){
  console.log(collection);
  //Check to see if the user's collection is already complete
  if (user.recordCollection.length === collection.pagination.items){
    console.log('All records already in user\'s collection');
  } else{
    collection.releases.forEach(record => {
      //Check if record is already in the user's collection
      if (user.recordCollection.includes(record.basic_information.master_id)){
        console.log('Record is in user\'s collection');
      } else{
        saveRecord(record, user)
      }
    })
  }
}


async function saveRecord(record, user){
  let newRecord = await createRecord(record);
  //newRecord.save()
  user.recordCollection.push(newRecord)
  //user.save()
}


async function createRecord(record){
  let newRecord = new Record();
  newRecord.masterID = record.basic_information.master_id;
  newRecord.title = record.basic_information.title;
  let completeRecord = await getRecordData(newRecord)
  return completeRecord
}

function getRecordData(record) {
  let db = new Discogs().database();
  db.getMaster(record.masterID, (err, data) => {
    record = data;
    console.log(record);
  })
  .then((err, data) => {return data})
}


function createJWT(payload) {
  return jwt.sign(
    {payload},
    SECRET,
    {expiresIn: '15m'}
  );
}
//

// function getDiscogsRequestToken(req, res){
//   console.log(req.body);
//   oAuth.getRequestToken(
//     process.env.REACT_APP_DISCOGS_OAUTH_CONSUMER_KEY,
//     process.env.REACT_APP_DISCOGS_OAUTH_CONSUMER_SECRET,
//     'http://localhost:3001/api/discogs/callback',
//     function(err, requestData){
//       loginURL= requestData.authorizeUrl
//       res.json(loginURL)
//     }
//   )
// }
//
// function getDiscogsAccessToken(req, res){
//   console.log('Get access');
//   oAuth.getAccessToken(
//     req.query.oauth_verifier,
//     function(err, accessData){
//       console.log(accessData);
//       res.send('access data')
//     }
//   )
// }
