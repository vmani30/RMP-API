const axios = require('axios');
const cheerio = require('cheerio');


function getProfData(profURL, callback) {
    axios.get(profURL).then(function (response) { //Callback function

        if (response.status === 200) { // valid url
            const html = response.data;
            
            // CSS Selector
            var wouldTakeAgain = "#root > div > div > div.PageWrapper__StyledPageWrapper-sc-3p8f0h-0.iwLXsH > div.TeacherRatingsPage__TeacherBlock-a57owa-1.gmNsKR > div.TeacherInfo__StyledTeacher-ti1fio-1.fIlNyU > div.TeacherFeedback__StyledTeacherFeedback-gzhlj7-0.jCDePN > div:nth-child(1) > div.FeedbackItem__FeedbackNumber-uof32n-1.bGrrmf"
            var difficulty = "#root > div > div > div.PageWrapper__StyledPageWrapper-sc-3p8f0h-0.iwLXsH > div.TeacherRatingsPage__TeacherBlock-a57owa-1.gmNsKR > div.TeacherInfo__StyledTeacher-ti1fio-1.fIlNyU > div.TeacherFeedback__StyledTeacherFeedback-gzhlj7-0.jCDePN > div:nth-child(2) > div.FeedbackItem__FeedbackNumber-uof32n-1.bGrrmf"
            var overallQuality = "#root > div > div > div.PageWrapper__StyledPageWrapper-sc-3p8f0h-0.iwLXsH > div.TeacherRatingsPage__TeacherBlock-a57owa-1.gmNsKR > div.TeacherInfo__StyledTeacher-ti1fio-1.fIlNyU > div:nth-child(1) > div.RatingValue__AvgRating-qw8sqy-1.gIgExh > div > div.RatingValue__Numerator-qw8sqy-2.gxuTRq"
            var mostRecentComment = "#ratingsList > li:nth-child(1) > div > div.Rating__RatingInfo-sc-1rhvpxz-2.coQIDo > div.Comments__StyledComments-dzzyvm-0.dEfjGB"

            // JQuery Function
            const $ = cheerio.load(html); // creates Jquery function to parse through html

            // $(css_selector) ==> Jquery HTML Object for the found html tag
            const percentage = $(wouldTakeAgain).html();
            const difficultyDecimal = $(difficulty).html();
            const quality = $(overallQuality).html();
            var mostRecentCommentHtml = $(mostRecentComment).html();
            
    
            
            callback({
                percentage: percentage,
                difficulty: difficultyDecimal,
                quality: quality,
                mostRecentComment: mostRecentCommentHtml
            })

            


            
            // Learn about JavaScript callbacks
            
        }


    }, function (error) {

    });
}

module.exports = getProfData