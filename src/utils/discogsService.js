const Discogs = require('disconnect').Client;

const BASE_URL ='/api/discogs/';

export default  {getDiscogsSignIn}

// Sets User-Agent
const dis = new Discogs({
      consumerKey: process.env.REACT_APP_DISCOGS_OAUTH_CONSUMER_KEY,
      consumerSecret: process.env.REACT_APP_DISCOGS_OAUTH_CONSUMER_SECRET,
});
//
// const { Sender, Receiver } = createOauthFlow({
//   authorizeUrl: 'https://www.discogs.com/oauth/authorize',
//   token Url: 'https://api.discogs.com/oauth/request_token',
//   clientId: process.env.DISCOGS_OAUTH_CONSUMER_KEY,
//   clientSecret: process.env.DISCOGS_OAUTH_CONSUMER_SECRET,
//   redirectUri: 'https://www.yourapp.com/auth/dropbox',
// });
//

const headers = new Headers();
headers.append(
  'Content-Type',
  'text/javascript',
  'X-Discogs-Ratelimit',
  'X-Discogs-Ratelimit-Used',
  'X-Discogs-Ratelimit-Remaining',
  'Acces-Control-Allow-Origin'
);


function getDiscogsSignIn(user){
  return fetch(BASE_URL + 'login', {
                method: 'POST',
                body: JSON.stringify(user),
                headers:{'Content-Type':'application/JSON'}
                }
              ).then(res => {
                  if (res.ok) return res.json();
                }
              )
}

// function getDiscogsSignIn(req, res){
//   var oAuth = new Discogs().oauth();
//   oAuth.getRequestToken(
//     process.env.DISCOGS_OAUTH_CONSUMER_KEY,
//     process.env.DISCOGS_OAUTH_CONSUMER_SECRET,
//     'http://your-script-url/callback',
//     function(err, requestData){
//       console.log(requestData);
//       // Persist "requestData" here so that the callback handler can
//       // access it later after returning from the authorize url
//       res.redirect(requestData.authorizeUrl);
//     }
//   )
// };
