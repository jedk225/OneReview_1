//Wait until document has fully loaded and is ready then...
$(document).ready(function () {

    $("#error-page").hide();


    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAL7BbZrnNciQGyHQmQYiJn215RSkwt5hY",
        authDomain: "rayray-36a52.firebaseapp.com",
        databaseURL: "https://rayray-36a52.firebaseio.com",
        projectId: "rayray-36a52",
        storageBucket: "rayray-36a52.appspot.com",
        messagingSenderId: "456344785187"
    };
    firebase.initializeApp(config);

    //Make a variable to hold our product info on #productInfo
    var infoArea = $("#productInfo");

    //Variable to access database
    var database = firebase.database()

    //Every time our search button is clicked...
    $("#searchButton").on("click", function (event) {
        event.preventDefault();

        $("#productInfo").css("background-color", "white")
        $("#productInfo").css("margin-right", "0%")

        //Take our text from our input form and put it inside of a variable called product
        var product = $("#productInput").val().trim();
        var queryURL = "http://api.walmartlabs.com/v1/search?apiKey=fpa5mauqm95qpzwweykc47uv&query=" + product;

        //ajax (Cleaning Supplies) Call
        $.ajax({
            dataType: "jsonp",
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log("var product: " + product);

            //Console log response
            console.log(response);
            $("#whole-page").show();

            if (response.message === "Results not found!") {
                $("#error-page").show();
                $("#whole-page").hide();
                $("#error-page").html("<h1>" + "Error: Product not found. Please enter a valid search query" + "</h1>");
            } else if (product == "") {
                $("#error-page").show();
                $("#whole-page").hide();
                $("#error-page").html("<h1>" + "Error: No input recognized. Please enter a valid search query" + "</h1>");
            } else {
                $("#error-page").hide();

                //Make a variable for our results response
                var results = response.items;

                //Clear our #productInfo (every time search is clicked)
                infoArea.empty()

                //Create a div for our product
                var productDiv = $("<div>");

                //For every time i=0...
                for (var i = 0; i < 1; i++) {

                    //Get product name, price, despcription, rating, and if any stock is available
                    var name = results[i].name
                    var salePrice = results[i].salePrice
                    var shortDescription = results[i].shortDescription
                    var customerRating = results[i].customerRating
                    var stock = results[i].stock
                    var productImage = results[i].mediumImage

                    //Push each response onto Database
                    // database.ref().push({
                    //     name: name,
                    //     salePrice: salePrice,
                    //     shortDescription: shortDescription,
                    //     customerRating: customerRating,
                    //     stock: stock,
                    //     productImage: productImage
                    // })
                    var allImages = results[i].imageEntities;
                    var newD = $("<div uk-slider >");
                    var newPosition = $("<div class = 'uk-position-relative'>").appendTo(newD);
                    var newContainer = $("<div class = 'uk-slider-container '>").appendTo(newPosition);
                    var newL = $("<ul class='uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid'>").appendTo(newContainer);
                   
                    for (var index = 0; index < allImages.length; index++) {
                        var newLi = $("<li>");
                        var newImage = $("<img>");
                        newLi.append(newImage);
                        newImage.attr("src", allImages[index].mediumImage);
                        newL.append(newLi);
                    }
                    var arrowLeft = $('<a class="uk-position-center-left-out uk-position-small" href="#" uk-slidenav-previous uk-slider-item="previous"></a>').appendTo(newPosition);
                    var arrowRight = $('<a class="uk-position-center-right-out uk-position-small" href="#" uk-slidenav-next uk-slider-item="next"></a>').appendTo(newPosition);
                    //var navDot = $(" <ul class='uk-slider-nav uk-dotnav'></ul>").appendTo(newD);

                    //Create an image div and append the provided image to our created div (productDiv)
                    var image = $("<img>");
                    image.attr("src", productImage);
                    productDiv.append(newD);

                    //Append all of our information to our div (productDiv) on screen
                    productDiv.append("<br>" + "<br>" + name);
                    productDiv.append("<br>" + "<br>" + "MSRP: $" + salePrice);
                    productDiv.append("<br>" + "<br>" + shortDescription);
                    productDiv.append("<br>" + "<br>" + "Rating: " + customerRating + " Out of 5");
                    productDiv.append("<br>" + "<br>" + "Stock: " + stock);

                    //Append our div (productDiv) onto our infoArea (#productInfo)
                    infoArea.append(productDiv);

                }


            }


        })



    });

    // //Watch for "child_added"
    // database.ref().on("child_added", function (snapshot) {

    //     //Here we take a snapshot and store it in a variable
    //     var snapshotValue = snapshot.val();

    //     //Console.log our values to make sure we have them correctly
    //     console.log(snapshotValue.name)
    //     console.log(snapshotValue.salePrice)
    //     console.log(snapshotValue.shortDescription)
    //     console.log(snapshotValue.customerRating)
    //     console.log(snapshotValue.stock)
    //     console.log(snapshotValue.productImage)






    //     //     //-----------------------------------------------------------------------------------------------------------------------
    //     //     //Show most recent item when page loads
    //     //     //-----------------------------------------------------------------------------------------------------------------------



    //     //     //Create a div for our product
    //     //     var productDiv = $("<div>");

    //     //     //Create an image div and append the provided image to our created div (productDiv)
    //     //     var image = $("<img>");
    //     //     image.attr("src", snapshotValue.productImage);
    //     //     productDiv.append(image);

    //     //     //Append all of our information to our div (productDiv) on screen
    //     //     productDiv.append("<br>" + "<br>" + snapshotValue.name);
    //     //     productDiv.append("<br>" + "<br>" + "MSRP: $" + snapshotValue.salePrice);
    //     //     productDiv.append("<br>" + "<br>" + snapshotValue.shortDescription);
    //     //     productDiv.append("<br>" + "<br>" + "Rating: " + snapshotValue.customerRating + " Out of 5");
    //     //     productDiv.append("<br>" + "<br>" + "Stock: " + snapshotValue.stock);

    //     //     //Append our div (productDiv) onto our infoArea (#productInfo)
    //     //     infoArea.append(productDiv);






    //     //Handles error
    // }, function (errorObject) {
    //     console.log("Errors handled: " + errorObject.code)
    // })




});
