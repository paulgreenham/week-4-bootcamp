const request = require("request")

request("http://www.omdbapi.com/?apikey=af938898&t='The Lion King'", function(err, response){
    console.log(JSON.parse(response.body).Released)
})