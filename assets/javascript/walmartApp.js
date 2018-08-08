$(document).ready(function () {

    $("#searchButton").on("click", function (event) {
        event.preventDefault();
        product = $("#productInput").val().trim();
        
        var infoArea = $("#productInfo");

        var product;
        var queryURL = "http://api.walmartlabs.com/v1/search?apiKey=fpa5mauqm95qpzwweykc47uv&query=" + product;

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log(response);
            var results = response.items;
            infoArea.empty()
            var productDiv = $("<div>");

            for (var i = 0; i < 1; i++) {

                // alert(results[i].name);
                // alert("$" + results[i].salePrice);

                var image = $("<img>");
                image.attr("src", results[i].mediumImage);
                productDiv.append(image);

                productDiv.append("<br>" + "<br>" + results[i].name);
                productDiv.append("<br>" + "<br>" + "$" + results[i].salePrice);
                productDiv.append("<br>" + "<br>" + results[i].shortDescription);
                productDiv.append("<br>" + "<br>" + "Stock: " + results[i].stock);

                infoArea.append(productDiv);

            }

        })
    });






});