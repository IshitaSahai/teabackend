// # servers:- a software that's serving 
//     # backend has 2 major components:- a programming language and a database 
//     # database:- process the data verify it and then enter it in the database OR take the wuery asked at the frontend and fetch the data required as per the query and then give it at the frontend 
//     # databases:- mongodb, mysql, postgres, sqlite :- 1 db to be mastered, when interacting with the db, we use an ORM or an ODM like:- prisma # ORM, ODM r lind of a framework/library of the database that makes the work easier for the databse 
//     # using framwork/libraries with any language for the ease fo use:- react, angular, view, mongoose, express 

// # DARABASE WORKING:-
// # the database can work on a normal basic laptop
// # core concept of backend:-we write the code once but it can be deployed on multiple machines via which load balancing n all take place
// # now we've a database, that can be taken from mysql, mongodb, amazon microsoft it doesn't matter, it's just that it can be installed the databse on any machine (just like we can install mysql on our machine similarly we can also install the db on our machine as well)
// # CONCEPT that's the reason of 50-50% problems :-db is always on some other continent 
// # w write a backend on our machine:- for eg:- we got some data from the frontend for example the username and the password anc we can ask the databse if it's correct and if it's then we can send some response to the user and if it's not then also we can send something else to the user 
// # THE WORKING:- HOW EVERYTHING WORKS:-
// #1) we write the backend on some machine and that machine remains active on the servers and we write some functions and then we visit some urls:- /login or /signup and that url is detected by the frameworks/libraries and whatever route we've visited then what function is to be called, that's what we need to do and that's our work here at the backend 
// #2) at the backend we write the multiple functions only
// #3) the functions that we'll write will be interacting with the database 
// #4) then we need to send the response in the api format 

// # we wrote the functions at the backend and took some values from the db and then sent the response 

// # these calls may come from the browser(some react application that we've made) or some mobile applications(some react native or android or something)

// # packages used in the Js:- mongoose, express
// # express:-used for routing which makes the servers n all
// # mongoose:- used for the databse

// # js based backend:-3 things with which we'll deal while making backend:-
// # data(username,pass), file(pdf,image,video),third party api(google login,file upload on aws)
// # we can do multiple tasks like:-email sending,sms calls

// # file structure that we should follow:-
// # we should make the files inside src directory, outside it are the package.json and env:- used for deploying in the production 
// # some other files are also there outside the src folder like:- readme, git,lint,prettier etc
// # backend file structure:-
// # src structure:-
// # index file:-entry point of the appplication, db connects here as soon as the appiction starts ; app.js file:-it does some configurations(like cookies at the backend), contants(professional approach:-some restricted constant options from which we can select for eg:- air ticket booking system in which we can only select the options to sit from the 3 seats only, there can be many examples also in which we need to restrict the user to select from some restricted options only and not any others)
// # directory structures:-
// # DB folder:-actual code that connects with db
// # Models folder:-when we talk abt backend, we talk of keeping the data, and in order to keep the data, we need to hv the structure of how we're gonna keep the data, the structure is made in a different way in every library/language, that structure of keeping the data is k/a Models, it contains the exact code that checks if the data coming in is correct or not, for example:- if we've the user data then we need to hv the username, password, age etc in it, if we don't hv the age then we need to send the error that age also has to be there
// # Controllers folder:-it's a fancy name for functions/methods:- all the functionality is written inside the controllers, they take the data and process it
// # Routes folder:-the folder that tells which function is to be called upon clicking on any component, for eg:- if we're on /Login then which function is needed to be called and which needs to be called if we're on /Signup
// # Middlewares:-
// # Utils folder:-for eg:- if there's need to send the mail to the user, for eg:- when user does forget password, reset password or signup then we need to send them the mail to notify them, we can do all the work related to that in this folder #there're many other functionalities as well that we do at so many places like:- file upload that we can do it multiple times at multiple places and many others as well, all these coe under the utils folder #anything that we need to use again and again, we put it in the utilities 

// # the whole backend is dependent upon the nodejs 

// # THE MAIN WORK THAT WE WANNA DO IS THAT WE'VE A COMPUTER/MOBILE browser FROM WHICH WE'RE SENDING THE REQUESTS TO THE SERVER AND WE hv to make the server and we WANT THAT WHATEVER REQUEST IS BEING SENT TO THE COMPUTER, WE NEED TO SEND THE REPLY TO THAT 
// # WE'VE 2 TEHCHNOLOGIES/PACKAGES FOR THAT PURPOSE:- express and mongoose

// # all the work of sending the request and getting responses is handeled by express and the mongoose is for the databases

// # we need to make the server using express and we've to listen :- the listen can take place at different places ie. '/', /login etc

// # whenever we go to any url, then there's a server there that's listening that we've sent the request and that server decides what response is to be given to our request 

// # listen:- there's always someone at the backend/server that's listening to the requests that are received from the frontend, this is k/a listen

// # whenever we go at the postman.com or the google.com we listen at different places ie. '/'(slash) and it's k/a the home route 
// # similarly we get different routes at different applications, for eg:- /login:- login setup
// # there may be different routes like:- /login, /signup, /search or any other routes which may be listening to whatever is being sent from the frontend
// # all this listening work is handled by the express
// # express is a package
// # there're many types of requests:-the most common of them is the one that we do via the url in the browser:- ie. the get request
// # the different types of requests are on the basis of if we want to delete something from the database, we need to update something in the db, we want to save something in the db, and the requests arre given different names based on their categorization
// # get request:- the request that we send via the browser via the url is the get request


// NOW WE NEED TO MAKE AN EMPTY NODE APPLICATION INSIDE WHICH WE'LL NEED TO INSTALL EVERYTHING
//IN ORDER TO MAKE AN EMPTY NODE APPLICATION, WE NEED TO MAKE IT VIA npm init ie. a command to initialize an application from the node package manager
//npm init -y:- means to say yes to install all what's by default in the node package manager

//init is a utility just like createreactapp and vite that tells the complete process to create a package.json file after that we can use npm install in order to install all the things
// "scripts": {
    // "start":"node index.js"
//   }//by adding this in the scripts file of package.json whenever we'll run npm run start command then actually the node index.js will be running //it's more useful when we dploy it in the server

//EXPRESS:- IT'S A WEB FRAMEWORK
//installed using npm install express
//WE'RE MAKING A SERVER IN INDEX.JS