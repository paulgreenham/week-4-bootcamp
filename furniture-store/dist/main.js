const priceCheck = function(item) {
    $.ajax({
        method: "GET",
        url: `http://localhost:3000/priceCheck/${item.toLowerCase()}`,
        success: function(response) {
            if(response.price){
                $("#price-container").append(`<div>${item} price: ${response.price}</div>`)
            }
        },
        error: function(xhr, text, error) {
            console.log(text)
        }
    })
}

const buyItem = function(item) {
    $.ajax({
        method: "GET",
        url: `http://localhost:3000/buy/${item.toLowerCase()}`,
        success: function(response) {
            if(response){
                $("#buy-container").append(`<div>
                    Congratulations, you've just bought ${item} for ${response.price}. There are ${response.inventory} left now in the store.
                </div>`)
            }
        },
        error: function(xhr, text, error) {
            console.log(text)
        }
    })
}

$("#price-button").on("click", function() {
    priceCheck($("#price-input").val())
})

$("#buy-button").on("click", function() {
    buyItem($("#buy-input").val())
})