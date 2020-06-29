console.log("hi");

$("button").click(function (e) {
    console.log("you've clicked me");
    var fname = $("#fnameText").val().trim();
    var lname = $("#lnameText").val().trim();
    var university = $("#universityText").val().trim();
    console.log(fname, lname, university)
    $.ajax({
        url: "http://localhost:3000/professor?fname=" + encodeURIComponent(fname) + "&lname=" + encodeURIComponent(lname) + "&university="+ encodeURIComponent(university),
        method: 'get',
        success: function(result) {
            console.log(result);
            $("#fname").html("First Name: " + result.first_name);
            $("#lname").html("Last Name: "+ result.last_name);
            $("#university").html("University: " + result.university);
            $("#would_take_again").html("Would Take Again: " + result.would_take_again);
            $("#difficulty").html("Difficulty: " + result.difficulty);
            $("#overall_quality").html("Overall Quality: " + result.overall_quality);
            $("#most_recent_comment").html("Most Recent Comment: " + result.most_recent_comment);
            $("#url").html('Professor website');
            $("#url").attr("href", result.URL);

        }

    })
});