$(document).ready(function () {

    $("#searchButton").on("click", function (event) {
        event.preventDefault();
        product = $("#productInput").val().trim();

        var product;
        var queryURL = "http://api.walmartlabs.com/v1/search?apiKey=fpa5mauqm95qpzwweykc47uv&query=" + product;

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log(response);
            var results = response.items;

            for (var i = 0; i < 1; i++) {

            alert(results[i].name);
            alert("$" + results[i].salePrice);
            }

        })
    });






});