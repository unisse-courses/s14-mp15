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
1. Navigate to the directory (MAKE SURE FOLDER NAME IS mp2): `cd mp2` 
2. Install the dependencies: `npm install`
3. Run `mongo.exe` and open `MongoDB Compass`
3. Run the server: `node index.js`
    * Navigate to `http://localhost:3000/` in the browser to view the app.
    * Expected screen should be the Home page of Karne Sutra

To stop the server, simply key in `CTRL+C` (Windows) or `control (^) + C` (Mac).

## HOME PAGE
'Book a Table Now' button is the only way to access login page because that is the only reason for creating an account.

LOG IN PAGE:

    REGISTER:
    -Register option will open a registration modal.
    -Inputted data will be saved in the database - karnesutradb.users

    LOGIN:
    -Invalid login will redirect back to the Login page.
    -Valid login will redirect to the Book a Table page.

## MENU PAGE
Static page. Same for both guests and users.

## REVIEWS PAGE
    GUESTS: 
    -Will only see the reviews from the users stored in the database - karnesutradb.ratings

    USERS:
    -'Write a Review!' button will open a modal 
    -Submit a rating and it will be saved in the database - karnesutradb.ratings

    To implement in Phase 3: 
    -append the respective user name and profile picture from user who submitted rating form

## BOOK A TABLE PAGE
Will be visible after logging in.
Input booking details on the form and submit by clicking "Book Now", will be redirected back to reservation page.

    To implement Phase 3: 
    -Include email of the user who booked
    -alert box on reservation status
    -Calendar will display the status of the time whether available (color green) or not (color red)

Logout button at the bottom of the page, will redirect to Home page

## CONTACTS PAGE
Static page. Same for both guests and users.
