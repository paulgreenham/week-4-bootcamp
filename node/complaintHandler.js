const handleComplaints = function(complaint) {
    let complaints = require("./consts")
    if(complaint.type == complaints.FINANCE){
        console.log("Money doesn't grow on trees, you know.")
    }
    else if(complaint.type == complaints.WEATHER){
        console.log("It is the way of nature. Not much to be done.")
    }
    else {
        console.log("It'll pass, as all things do, with time.")
    }
}

module.exports = handleComplaints