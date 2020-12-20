# Karne Sutra Phase 2
## Group 15
* PLANAS, NICOLE
* LAGGUI, MARIUS
* PE, VANESSA

## Requirements
* [NodeJS & npm](https://www.npmjs.com/get-npm)
* MongoDB
* Any text editor for JavaScript, HTML & CSS

## Local Setup
1. Navigate to the directory: `cd mp2`
2. Install the dependencies: `npm install`
3. Run Mongo Shell `mongo.exe` and `MongoDB Compass Community`
3. Run the server: `node index.js`
    * Navigate to `http://localhost:3000/` in the browser to view the app.
    * Expected screen should be the Home page of Karne Sutra

To stop the server, simply key in `CTRL+C` (Windows) or `control (^) + C` (Mac).

## README.md should provide instructions on how to set it up (so that we can run it). Also provide the dummy credentials for logging in if you already have validations in place. Basically, your README should give us instructions on how to set up, run and access the pages.

## HOME PAGE
'Book a Table Now' button and 'Write a Review!' button is the only way to access login page because those are the only reasons for creating an account.

LOG IN PAGE:

    REGISTER:
    -Register option will open a registration modal.
    -For choosing a Profile Picture, go to public -> img -> then choose any photo that says User
    -Inputted data will be saved in the database -> karnesutradb.users

    LOGIN:
    -Invalid login will redirect back to the Login page.
    -Valid login will redirect to the Book a Table page.

## MENU PAGE
Static page. Same for both guests and users.

## REVIEWS PAGE

    -Display reviews submitted
    -Display awards of the restaurant
    -'Write a Review!' button will open a modal
    -If guest, they will be redirected to the login page before submitting (Phase 3)
    -For now, when submitting a rating, it will be saved in the database -> karnesutradb.rating then it will display on the page
    * NO ACTUAL PROFILE IMAGE AND USER NAME YET BECAUSE IT IS NOT CONNECTED TO THE USER COLLECTION, NO ACCESS CONTROL (Phase 3)

## BOOK A TABLE PAGE
    -Calendar is for reference of user
    -Reservation form will ask for pax (maximum of 10), date of reservation, and time.
    * 'Log Out' button to be implemented properly in Phase 3 (sessions)
    * PROFILE IMAGE AND DETAILS OF ACCOUNT LOGGED IN WILL BE DISPLAYED (Phase 3)

## CONTACTS PAGE
Static page. Same for both guests and users.

#### On dummy data
All names and data are not real or are not associated with any person. -->
