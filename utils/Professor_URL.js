const axios = require('axios');
const cheerio = require('cheerio');


function searchForProf(fname, lname, university, callback) { 
    fname = fname.toLowerCase().trim() // trimming for no extra characters
    lname = lname.toLowerCase().trim()
    university = university.toLowerCase().trim()

    searchURL = "https://www.ratemyprofessors.com/search.jsp?query=" + fname + "+" + lname

    axios.get(searchURL).then(function (response) { // callback function
        if(response.status === 200) {
            const html = response.data 

            // CSS Selector
            const $ = cheerio.load(html)
            var liSelector = ".listings > li";

            // [LiObject, LiObject, LiObject, LiObject]
            $(liSelector).each(function(index) {
                var name = $(this).find(".main").html() // including null case 
                var universityAndSubject = $(this).find(".sub").html() // including null case
                profURL= $(this).find("a").attr("href")
                

                
                if(universityAndSubject != null) {
                    universityAndSubject = universityAndSubject.toLowerCase().trim();
                    var rmpUniversity = universityAndSubject.split(",")[0];

                    if(name != null) {
                        name = name.toLowerCase().trim();
                        var rmpFirstName = name.split(",")[1].trim()
                        var rmpLastName = name.split(",")[0].trim()
                    }

                    
                    if (fname ==  rmpFirstName && lname == rmpLastName) {
        


                        if(profURL != null) {
                            
                            profURL = "https://www.ratemyprofessors.com" + profURL.trim()
                            callback({
                                URL: profURL,
                                fname: rmpFirstName,
                                lname: rmpLastName,
                                university: rmpUniversity
                                
                            })
                            
                        }
                    } 
                    
                } 
                




            }) 
            
        }


    })

}




module.exports = searchForProf
