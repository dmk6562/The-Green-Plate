
$(document).ready(function() {

  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyAvgfFYyOTbC7Bxn2JOrU54fpzw90VwGpE",
      authDomain: "feed-me-55633.firebaseapp.com",
      databaseURL: "https://feed-me-55633.firebaseio.com",
      projectId: "feed-me-55633",
      storageBucket: "",
      messagingSenderId: "710811767309"
    };
    
  firebase.initializeApp(config);
    // Create a variable to reference the database.
  var database = firebase.database();

  var recipes = [];
  

      //Function for displaying initial recipe array elements as buttons
  function renderButtons() {
      
      // function to prevent repeat buttons
    $("#buttonRecipes").empty();
      
      // Looping through the array of foods
    for (var i = 0; i < recipes.length; i++) {
      
      //Creating buttons for each recipe item in the array
      var a = $("<button>");
      
      a.addClass("btn btn - recipe info");

      // Adding a data-attribute 
      a.attr("data-name", recipes[i]);
      // Providing the button's text with a value of the food at index i
      a.text(recipes[i]);
      // Adding the button to the HTML
      $("#buttonRecipes").append(a);
      $('#recipes-input').val('')
    }
  }

      // Event listener for our food-buttons
  $("#add-recipe").on("click", function(event) {
      // event.preventDefault() prevents the form from trying to submit itself.
    
    event.preventDefault();
    // This line will grab the text from the input box
    var recipe = $("#recipe-input").val().trim();
    console.log(recipe)
    // The food from the textbox is then added to our array
    recipes.push(recipe);
    // calling renderButtons which handles the processing of our food array
    renderButtons();
    var apiKey = "899742294e75cfd27b128b2974895e4d";
    var queryURL = "https://api.edamam.com/search?app_id=2d2c9393&q="+recipe+"&app_key="+apiKey+"&limit=16";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response);
        

      //Storing the array as a variable name
      var recipeArr =response.hits;
      
      //looping through the array in queryURL
      for (var i=0; i<response.hits.length; i++) {

        var foodRecipes = $('<div class="col-sm-3">')
        console.log("For Loop");
      
      }
    })
  });
    
  $(document).on("click",".recipe", showRecipes);
    // Calling the renderButtons function at least once to display the initial list of foods


  //Grabbing and storing the data-food property value from the button
  function showRecipes() {
    var recipes = $(this).attr('data-name'); 

    //Constructing a queryURL using the food item
    var apiKey = "899742294e75cfd27b128b2974895e4d";
    var queryURL = "https://api.edamam.com/search?q=" + recipes + "&api_key=" + apiKey + "&limit=16";
    console.log(queryURL); 

    //function to prevent repeat buttons
    $("#recipeRowOne").empty();
    $("#recipeRowTwo").empty();
    $("#recipeRowThree").empty();
    $("#recipeRowFour").empty();
    renderButtons()

  //Perfoming an AJAX GET request to our queryURL      
    $.ajax({
    url: queryURL,
    method: "GET"
    }).done(function(response) {
      console.log(response);
        

      //Storing the array as a variable name
      var recipeArr =response.data;
      
      //looping through the array in queryURL
      for (var i=0; i<recipeArr.length; i++) {

        var foodRecipes = $('<div class="col-sm-3">')
      
      }
    });
  };
});
        
  
  
        

