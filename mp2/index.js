const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
// const socket = require('socket.io');
// const session = require('express-session');

const app = express();
const port = 3000;

const mongoClient = mongodb.MongoClient;
const databaseURL = "mongodb://localhost:27017/";
const dbname = "karnesutradb";
const options = { useUnifiedTopology: true };

app.engine( 'hbs', exphbs({
  extname: 'hbs',
  defaultView: 'main', 
  layoutsDir: path.join(__dirname, '/views/layouts'), 
  partialsDir: path.join(__dirname, '/views/partials'), 

  helpers: {
    cap: function(text) { return text.toUpperCase(); },
    logo: 'img/kslogo.png',
  }
}));

app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** ROUTES **/
// Home route
app.get('/', function(req, res) {

    res.render('home', {
      title: 'Karne Sutra',
      about: [
        {
          img: 'img/home3.jpg',
          title1: 'Authentic Cuisine',
          description:'Karne Sutra is the only Authentic Indian Cuisine that delivers the ultimate experience through food and ambiance.',
        },
        {
          img: 'img/home1.jpg',
          title1: 'Modern Indian Dining with a Twist',
          description: 'All the food we serve comes from reliable sources to make sure it is always fresh and healthy.',
        },
        {
          img: 'img/home2.jpg',
          title1: 'Different each visit',
          description: 'Our staff ensures that each person recieves top notch quality service to the customers so that their experience would be memorable each time.',
        },
      ]
    });
});

// Menu Route
app.get('/menu', function(req, res) {
  res.render('menu', {
    title: 'Pleasure in Indian Cuisine',
    food: [
      {
        img: 'img/appetizer.png',
      },
      {
        img: 'img/entree.png',
      },
      {
        img: 'img/dessert.png',
      },
    ]
  }); 
});

// Reviews connection to DB
mongoClient.connect(databaseURL, options, function(err, client) {

  if (err) throw err;
  const dbo = client.db(dbname);

  //Will create a collection if it has not yet been made
  dbo.createCollection("ratings", function(err, res) {
    if (err) throw err;
    console.log("Ratings Collection created!");
    client.close();
  });
});

app.get('/review', function(req, res) {

  mongoClient.connect(databaseURL, options, function(err, client) {
    if(err) throw err;
    const dbo = client.db(dbname);

    dbo.collection("ratings").find({}).sort({_id:-1}).toArray(function(err, result) {
      if(err) throw err;
      
      console.log("Read Successful!");
      client.close();

      res.render('review', {
        title: 'Reviews',

        //To implement in Phase 3: append the respective user name and profile picture form user who submitted form
        reviews: result, 
        //Dummy data for view user profile
        name: 'John Smith', 
        bio: 'I am a foodie',

        awards: [ //Dummy data for awards
      {
        award: 'img/award1.png',
      },
      {
        award: 'img/award2.png',
      },
      {
        award: 'img/award3.png',
      },
      {
        award: 'img/award4.png',
      },
      {
        award: 'img/award5.png',
      },
    ]
      });
    });
  });

});

  //user's reviews will be saved in the DB
app.post('/addRating', function(req, res) {

  const rating = {
    stars: req.body.stars,
    comment: req.body.comment
  };

    //Adds new ratings to DB
    mongoClient.connect(databaseURL, options, function(err, client) {
      if(err) throw err;
      const dbo = client.db(dbname);

      dbo.collection("ratings").insertOne(rating, function(err, res) {
        if (err) throw err;
        
        console.log(res);
        console.log("Insert Successful!");
    
        client.close();
      });
    
      const result = { success: true, message: "Comment added!" };
      // res.send(result);
      return res.redirect('/review');
      
    });
});

//User connection to DB
mongoClient.connect(databaseURL, options, function(err, client) {
  if (err) throw err;
  const dbo = client.db(dbname);

  //Will create a collection if it has not yet been made
  dbo.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Users Collection created!");
    client.close();
  });
});

// Login Page
app.get('/login', function(req,res) {
  res.render('login', {
    title: 'Become a Patron', 
  });
});

//add new registering user details to DB
app.post('/addUser', function(req,res) {
  const user = 
  {
  firstName: req.body.firstName,
  lastName: req.body.lastName,
  email: req.body.email, 
  psw: req.body.psw,
  bio: req.body.bio,
  dp: `img/${req.body.dp}.png`
  };

    //Inserts NEW user data to DB
    mongoClient.connect(databaseURL, options, function(err, client) {
      if(err) throw err;
      const dbo = client.db(dbname);

      dbo.collection("users").insertOne(user, function(err, res) {
        if (err) throw err;
        
        console.log(res);
        console.log("Insert Successful!");
    
        client.close();
      });
    
      const result = { success: true, message: "User created!" };
      // res.send(result);
      return res.redirect('/login');
    });
});

//looks for existing user from DB to verify login user
app.post('/loginUser', function(req,res) {

  mongoClient.connect(databaseURL, options, function(err, client) {
    if(err) throw err;
    const dbo = client.db(dbname);

    const email = req.body.email;
    const psw = req.body.psw;

    dbo.collection("users").findOne({email: email, psw: psw}, function(err, user) {

      try{
      if(!user) {
        return res.redirect('/login')
      } else {
      return res.redirect('/reserve') }
      } catch {
        console.log(err);
        return res.status(500).send();
      }
      client.close();
    });
  });
});

//add new registering user details to DB
app.post('/addReservation', function(req,res) {
  const reservations = 
  {
    date: req.body.date,
    pax: req.body.pax,
    timeslot: req.body.timeslot,
    
  };

    //Inserts NEW Reservations data to DB
    mongoClient.connect(databaseURL, options, function(err, client) {
      if(err) throw err;
      const dbo = client.db(dbname);

      dbo.collection("reservations").insertOne(reservations, function(err, res) {
        if (err) throw err;
        
        console.log(res);
        console.log("Insert Successful!");
        client.close();
      });
    
      const result = { success: true, message: "Reservation created!" };
      res.send(result);
    });
});

//TO ADD: Remove Reservation

//Reservation connection to DB
mongoClient.connect(databaseURL, options, function(err, client) {

  if (err) throw err;
  const dbo = client.db(dbname);

  dbo.createCollection("reservations", function(err, res) {
    if (err) throw err;
    console.log("Reservations Collection created!");
    client.close();
  });
});

//Reserve Route, User
app.get('/reserve', function(req, res) {
  res.render('reserve', {
    title: 'Book a Table',
  });
});

//Logout User
app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/home');
});

// Contact Route
app.get('/contact', function(req, res) {
  res.render('contact', {
    title: 'Come Talk to Us',
    social: [
      {
        ref: 'http://www.facebook.com',
        img: 'img/facebook.png',
      },
      {
        ref: 'http://www.instagram.com',
        img: 'img/instagram.png',
      },
      {
        ref: 'http://www.twitter.com',
        img:'img/twitter.png',
      },
    ]
  });  
});

app.use(express.static('public'));

app.listen(port, function() {
  console.log('App listening at port '  + port)
});
