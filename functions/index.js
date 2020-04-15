const functions = require('firebase-functions');
var admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const request = require('request');
const app = express();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

var billplzautho = "Basic ODg0MTk0YmItZGY1My00Nzg5LWJmY2YtYjg0NDIzMDg4ZmIx"
var billplzlink = 'https://www.billplz-sandbox.com/api/v3/bills'
var billcollid = "bpg2k6d3"
admin.initializeApp({
  credential: admin.credential.cert({
    "type": "service_account",
    "project_id": "func-firebase",
    "private_key_id": "41819ff754ab615faf9edb5423edb2175ec2e6c3",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDVrBuQDywjkBWT\nhfWHFqAPHodMkF0IDMd7Xzh3vk+tD50JyUmlGX5sr26qRelvxv4YGH3oTT7v1sPB\n+WqXojHOLYePiQip5+OWVdjS0eOSP45bdWsNEoNUaOazW4+zBBTkxC2brTBzZTC1\nwYgEv0CcY0VIJZ8f/lKVOp3L2ANAvsXBqzBcgJ+H+LKuECUuZ7FZ8Gp4jMLm2HHR\nVR6DNd5hiU4tE7acWi4kfDn/iF2zbz6xLnolMRhAxWOu+7UEQ5LQqqRrg9F8ezSU\nkKAGke4b5Q92YGNn6NMpnokKg7HAAEIqWGLgQ4elnWlffpT4Y5cxHZUiwfM0X90W\nhlfVdqmTAgMBAAECggEAQ+Dieq/POlb1+8EFIE6YN2Vf3vtHipygrHkx85xSLGy2\n2xqGWjwQlQ9gLRh7kYZaRyZUrT0I3uFPm+oTqisc/l4pX/hM98jSXHpWIJcL3/Rv\n0W8qPGNitCiFDXprWpfT2V7XDEsHBsmhIURjZPqq2GOS6VoGRIAjFQQjh9POKL09\nLodo6VLoxIKADz9Mj+7leONk9bkVzb6kAPRu1RTrWFxHaX/r8cB/k1vAEZeB0eH1\neaROEioweD4RVLIKoJeQ52/b1RxWxD+SDt+6ona99hCUrbzvyg2l3LV2DKCydcfc\n5CLWoruKc3CqqiwNqqBCGH6pKvs5xBHK0rrQ7649dQKBgQD4l03dW5LCx5BQ3125\nwzbiLopLgW/CqYJeMYr6Mos0fAliLYFrrRWSiiCxnYtF2oFXvwOL0m273ewpRt/X\n7kdcBrmGYa61dW4LUwgJ2XQufjNtMpKE78AvaImh+2w0cKzhDAeFrgPlC/UIcFBt\nNOgat039x6Q9EUdIaJEWspuatwKBgQDcCmGPnVz4JgBi6suhC6sdPZMEIKF3mb4a\n9Smkg8XHENFLZp2IN3J7FNRZf9rnnfWpqrLuGJ+oRdKviWVovnu7P82zeVzawJWH\nKytgHSBmNPE9KXCVdgUd+UVp9nvt/G1YxPNfert3svrwoRc/4u/XlMXy9FcCMP8B\njj6XxmR8BQKBgDmTebJaQkygwhkpEuEyiKSsWNWSHht8/Tfpy6GVUU6Pp/C4T3Br\n/0IYgegBcD92k1yKXjzlOQs5JDiPNMsjYh27ZP7t4vQeRaWTzpnRZqpaCnkxLGRj\nzyRr1uzQechPjIr3KUrZ+gbz1QXmVYplpZiCeircMXr/ZH4t0eTq60VTAoGASPLM\nG0+hRcdbc2/B6Hc02HHUbpbe0QbQRqGml5r0E6XYrTWs3j77niBusek4SndMvV4R\nCexx6diUG4viadJUtORXLrv6c69LI0/FhozBdADzRUKax4Ij+ibsw09rEKASJE7P\nHIVU5z8YAHR3f7+dogv5gC1PNzPFJt/gknK8V30CgYEAndYdmAUGcLXumAvL6edq\nfNYRG1CUVTANGRQo3bzSp2xuKIlICzQRytejo+WwNcAFl6d6yfYI7yvjQeIYvEGr\nHcKWjrdC/36avUOPI3jBhCt/ZsfExzS4FJNYOeMessxnuHSdtDKT9wC5vkIhzsml\nJALtlLiAG05GQhReo9zGD7Y=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-jb2u0@func-firebase.iam.gserviceaccount.com",
    "client_id": "115934024333896394206",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jb2u0%40func-firebase.iam.gserviceaccount.com"
  }),
  databaseURL: "https://func-firebase.firebaseio.com"
});

app.get('/redirectUrl', (req, res) => {

  let id = req.query.id






  var options = {
    method: 'GET',
    url: billplzlink + '/' + billid.val().id,
    headers:
    {
      Authorization: billplzautho
    }
  };

  request(options, function (error, response, body1) {
    var paymentIntent = JSON.parse(body1)
    if (error || paymentIntent.paid === false) {

      return res.redirect(billid.val().ref3)
    } else if (paymentIntent.paid === true) {

      //admin.database().ref('/invoice/' + id ).update(paymentIntent)


    } else {
      return res.redirect(billid.val().ref3)
    }
  });



})

app.post('/callback', (req, res) => {

  console.log(req.body)
  console.log(req.query)


  admin.database().ref('billplzztest').update(req.body)
  admin.database().ref('billplzztest2').update({ sont: "asdasd" })
  return res.send(req.body)
})





app.get('/billplz', (req, res) => {



  var options = {
    method: 'POST',
    url: billplzlink,
    qs:
    {
      collection_id: billcollid,
      description: 'pushkey',
      email: 'chongsinran@gmail.com',
      name: 'RM 19.90 - Fight 2020 Pass',
      amount: 1990,
      callback_url: 'http://localhost:5001/codebento-test/us-central1/widgets/callback',

    },

    headers:
    {
      Authorization: billplzautho
    }
  };
  // console.log(options.qs)
  request(options, function (error, response, body) {
    let passbackobj = JSON.parse(body)

    if (error) {
      console.log()
      return res.send({ error: "failed update" })
    } else {



      console.log(passbackobj)
      res.redirect(passbackobj.url);

    }


  });
})

//kyNGhJcVpjAAAAAAAAAm6eHhOOr-bOKN5oTavVfE-RXt1Pv9MXGUJ5udzj2i_-gV

app.get('/dropboxlogin', (req, res) => {

  var request = require('request');
  var options = {
    'method': 'GET',
    'url': 'https://www.dropbox.com/oauth2/authorize?client_id=s27gti85ll63mv3&response_type=code',
    'headers': {
      'Cookie': 'locale=en; gvc=MjQzMTQ1ODE2MjcwNDIyODQ5NjE3MzU4NjI5NzY2OTk3MDUwNzY4; t=ENcesRyzLZ1hKsm38ONm5sr2; __Host-js_csrf=ENcesRyzLZ1hKsm38ONm5sr2'
    }
  };
  request(options, function (error, response) {
    if (error) {

    } else {
      res.send(response.body)
    }
  });



})

exports.widgets = functions.https.onRequest(app);