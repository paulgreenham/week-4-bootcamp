const express = require("express")
const app = express()
const path = require("path")


app.use(express.static(path.join(__dirname, "dist")))
app.use(express.static(path.join(__dirname, "node_modules")))


app.get('/', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Ending the cycle, thanks for visiting")
})

// app.get('/maps', function (request, response) {
//     response.send("Here's some stuff related to maps")
// })

// app.get('/shoobi', function (request, response) {
//     response.send("This here is the shoobi *route*")
// })

// app.get("/life", function(request, response) {
//     response.send("42")
// })

// const users = {
//     tilda: "You've done a wonderful job",
//     riva: "You need to improve your form, but good perseverance",
//     jeremy: "You're incredible"
// }

// app.get('/users/:userID', function(request, response) {
//     response.send(users[request.params.userID])
// })

// app.get('/routeWithOptionalParameters', (request, response) => {
//     let params = request.query
//     response.send(params)
// })

// app.get("/details", function(request, response) {
//     let params = request.query
//     let extraction = {}
//     extraction.zipcode = (params.zipcode || "")
//     extraction.city = (params.city || "")
//     extraction.middleName = (params.middleName || "")
//     console.log(extraction.city)
//     response.send(extraction)
// })

const data = {
    8112: {
        title: "Name of the Wind",
        author: "Patrick Rothfuss"
    },
    9121: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
    },
    1081: {
        title: "The Giver",
        author: "Lois Lowry"
    }
}

app.get("/books/:booksID", function(request, response) {
    let bookData = request.params
    response.send(data[bookData.booksID])
    console.log(data[bookData.booksID])
})

const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})