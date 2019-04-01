//Server lesson exercises

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(path.join(__dirname, "dist")))
app.use(express.static(path.join(__dirname, "node_modules")))


app.get("/", function(request, response) {
    response.send("Server is up and running smoothly")
})

app.get("/priceCheck/:name", function(request, response) {
    let query = store.find(s => s.name == request.params.name)
    if(query) {
        response.send({price: query.price})
    }
    else {
        response.send({price: null})
    }
})

app.get("/buy/:name", function(request, response) {
    let query = request.params.name
    for(let item of store){
        if(item.name == query && item.inventory > 0){
            item.inventory--
            return response.send(item)
        }
    }
})

app.get("/sale", function(request, response) {
    let params = request.query
    if(params.admin){
        let newStr = "Sale"
        for(let item of store) {
            let originalPrice = item.price
            if(item.inventory > 10){
                item.price = originalPrice  * 0.5
                newStr += `, ${item.name}s now available for ${item.price}`
            }
        }
        response.send(newStr + ".")
    }
    else {
        response.end()
    }
})

port = 3000
app.listen(port, function() {
    console.log(`Server running on port ${port}`)
})