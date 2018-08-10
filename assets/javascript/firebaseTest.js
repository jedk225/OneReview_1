$(document).ready(function() {
    //<script src="https://www.gstatic.com/firebasejs/5.3.1/firebase.js"></script>
   
      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyDQlfAuER5JMKPBxn9JRxhokFr2xHyhh2Y",
        authDomain: "testimonial-fd449.firebaseapp.com",
        databaseURL: "https://testimonial-fd449.firebaseio.com",
        projectId: "testimonial-fd449",
        storageBucket: "testimonial-fd449.appspot.com",
        messagingSenderId: "884247298407"
      };
      firebase.initializeApp(config);
    // add testimonial
    var database = firebase.database();
    $("#submit-testimonial").on("click", function (event) {
      event.preventDefault();
  
      // user input is assigned to variable
      var name = $("#name").val().trim();
      var text = $("#text-input").val().trim();
  
      console.log(name);
          console.log(text);
  
      var newEntry = {
        _n: name,
        _t: text,
      }
  
      //push entry to database
      database.ref().push(newEntry);
  
      //reset text input contents
      $("#name").val("");
      $("#text-input").val("");
    });
  
    database.ref().on("child_added", function (childSnapshot) {
  
      console.log(childSnapshot.val());
      //debugger;
      // assign firebase variables to snapshots.
      var _n = childSnapshot.val()._n;
      var _t = childSnapshot.val()._t;
  
      // Append to virtual table
      $("#name_").append( _n);
      $("#testimonial").append( t);
  
  
    });
  });