const professorURL = require('./utils/Professor_URL')
const professorData = require('./utils/Professor_Data')
const express = require('express');
var app = express();
const cors = require('cors');

app.use(cors());

app.get('/', function (req, res) {
    res.json('WELCOME TO THE RATE MY PROFESSOR API' );
});


app.get('/professor', function (req, res) {
    const fname = req.query.fname;
    const lname = req.query.lname;
    const university = req.query.university;
    
    professorURL(fname, lname, university, (response) => {
        professorData(response.URL, (data) => {
            res.json({
                URL: response.URL,
                first_name: response.fname,
                last_name: response.lname,
                university: response.university,
                would_take_again: data.percentage,
                difficulty: data.difficulty,
                overall_quality: data.quality + "/5",
                most_recent_comment: data.mostRecentComment

            })
    
        })
    
    })
    


});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
