require('dotenv').config()
const express = require('express')//we've made kind of an object here;//require module syntax//we've made a variable for the dependencies that we've installed in express of the node module ie. express: whose all the dependencies are in the node module, we've made a variable from it 
//another syntax for the same:-
// import express from 'express'//this is the module syntax 
const app = express()//we've made a variable using express, now we can use it for many app. functions 
const port = 3000//threre're many virtual ports in a computer, just like we use usb or many other ports on a computer physically, similarly there're many virtual ports in a computer as well 

//there're many virtual ports via which the server will listen, our server will listen on the port 3000 (it can be any number, 3000 or 4000 or anything not neccessarily 3000)

//SENDING REQUESTS:-
//now, we're making a get request via app(the powerful thing that we've got from the express is app)
app.get('/', (req, res) => {//we're asking the app to listen on the home route ie. the slash('/'), if any sort of request comes on the slash('/'), then we'll send a hello world on the response via doing a callback 
  res.send('Hello World!')
})//here localhost:3000 is the home route ie. '/' here and that's y when we go at that url then we get hello world as the response 

//handling one more request:-
app.get('/twitter', (req,res)=>{//callback of express has 2 parameters req, and res 
    res.send('hiteshdotcom')
})//when we go at this url htieshdotcom will come as a response 

app.get('/login',(req,res)=>{
  res.send('<h1>please login at tea and code</h1>')//we can send anything as the response to the url call //without restarting the server this won't get displayed at the login page as whenever there r any changes in the file then the file gets autosaved and the code is restarted at the backend but for the changes to be reflected at the page we need to do the processing again so that the output can come as per the updated code  
  //so whenever we make any changes in the code, we need to restart the server in order to reflect the changes
})

//one more request at a url:-
app.get('/youtube',(req,res)=>{
  res.send("<h2>tea and code</h2>")
})

//LISTENING TO REQUESTS ON THE PORT:-
//listiening via the app (as app is made from express so we've given the whole functionality of express to app)

//we already have the port here:- and now we r changing just the port variable 
app.listen(process.env.PORT, () => {//changing the port variable here 

  //port's automatically taken from the env variable and not from the port that we've defined in the file here //it may print the variable from the file itself in the console as we're printing that variable only by using port but it's not the port at which our server's running, our server is runnning at the port that's defined by the variable that's in the .env file:-
  console.log(`Example app listening on port ${process.env.PORT}`)//here our app isn't closing automatically ie. our application isn't terminating, when we did the console log then our application gets teminated ie. our application gets ended, and we get the console but here we aren't getting the console so our application is continuously listening, so this is our server that we've created 
})//we've made a server that's listening at both slash('/') as well as '/twitter' and if someone visits those urls then our server also sends response to them


//NOW WE'VE LEARNT TO WRITE THE APPLICATION AND NOW WE WANNA DEPLOY IT 
//NOW WHILE DEPLOYING THE PRODUCTION GRADE APPLICATION, WE NEED TO TAKE CARE OF A FEW THINGS:-WE NEED TO TAKE CARE OF SOME SPECIAL VARIABLES 

//THERE MAY BE SOME SENSITIVE ISSUES LIKE THE SENSITIVE INFORMATION OF THE DATABASE LIKE DATABASE USERNAME, PASSWORD AND THE LOGIN URL these are some sensitive information and shouldn't be directly avialable 

//now here, our port number 3000 is free in our system so we'r using that in order to load our applicatoin but in case when we're going on the server(someone else's computer) then we're not sure that we'll be getting this port number free in their system, so they may be loading their own port number forcefully 

//IN A PRODUCTION APPLICATION THERE'S A DIFFERENCE OF THESE SMALL SMALL PACKAGES AND THE WORKFLOW ONLY

//IF WE NEED To TAKE THIS APPLICATION TO THE PRODUCTION THEN ATLEAST AT THIS POINT,WE JUST NEED TO KNOW ABT A FEW PACKAGES ONLY, THE MAIN PACKAGE THAT WE HV TO READ ABT IS .ENV 
//STEP 1:- INSTALLING dotenv using :- npm i dotenv
//STEP 2:- CREATING THE FILE .env AND WRITE WHATEVER VARIABLE WE WANT USING THE VARIABLES IN ALL CAPITALS (in general they're written in capitals)
//STEP 3:-WRITE require('dotenv').config() in the file and then 
//STEP 4:- wherever we need to use this file, we can use it using the process.env and then use whatever is the name of the variable after writing process.env 

//now after implementing this port via .env variable instead of using it directly from the file, we can deploy this in the production 

//now when we're planning to deploy it in the production then we need to see different things that where can we deploy :- aws, digitalocean, azure, heroku, railway, seenode, render, cyclic.sh, 