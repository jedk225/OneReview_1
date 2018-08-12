$(document).ready(function () {

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

  //Variable to hold our testimonials
  var testimonials = $("#testimonials")

  //Variable to access database
  var database = firebase.database();

  //Initial Values
  var userRatings = "";
  var userTestimonials = "";

  //Every time our submit button is clicked...
  $("#submitButton").on("click", function (event) {
    event.preventDefault();
    if ($("tr").length > 5){
      $("tr:last").remove();
    }
    //Capture User Rating and Testimonial and put them inside td tags
    userRatings = $("#userRating").val().trim();
    userTestimonials = $("#userComment").val().trim();

    console.log(userRatings)
    console.log(userTestimonials)

    database.ref().push({
      userRatings: userRatings,
      userTestimonials: userTestimonials
    });
    $("#form")[0].reset();
  });

  database.ref().limitToLast(6).on("child_added", function(snapshot){
    var sv = snapshot.val();

    if ($("tr").length > 5){
      $("tr:last").remove();
    }
    console.log(sv.userTestimonials)
    console.log(sv.userRatings)
    testimonials.prepend("<tr class='uk-card-hover'><td> " + sv.userRatings + " out of 5" +
    " </td><td> " + sv.userTestimonials +
      " </td><tr> ")

  })
  

});