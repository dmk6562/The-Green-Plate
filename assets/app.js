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

  //Variables for Category Ingredients
  var dairyProducts =["kale","AlmondMilk"]
  var ingredientSelected = [];

  //Get Dairy Products and create as button
    function getDairyProducts() {
        for (var i = 0; i < dairyProducts.length; i++) {
            //debugger;
            var newButton = $("<button>");
            newButton.addClass("btn btn-default dairyBtn");
            newButton.attr("type", "button");
            newButton.append(dairyProducts[i]);
            newButton.attr("value", dairyProducts[i]);
            $("#ingredients").append(newButton);

            console.log(dairyProducts);
        }
    }

  //Display Ingredients based on Category button clicked
    $('#dairyButton').on("click", function(event) {
        getDairyProducts();
    });

  //Display chosen ingredient in Selected Ingredient Panel
    $(document).on("click",".dairyBtn", function(event) {
        var ingrd = $('.dairyBtn').val();
        $('#selectedIngredients').append(ingrd);
        console.log(ingrd);

        ingredientSelected.push(ingrd);
        console.log(ingredientSelected);

    });

    //Function for displaying initial recipe array elements as buttons
  function getRecipes() {
      var apiKey = "899742294e75cfd27b128b2974895e4d";
      var queryURL = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?app_id=2d2c9393&q=" + ingredientSelected + "&app_key=" + apiKey + "&limit=16";
      console.log(queryURL);

      $.ajax({
          url: queryURL,
          method: "GET"
      }).done(function(response) {
          console.log(response.hits);
          console.log(response.hits.recipe.source);
      });

    } getRecipes();

    // //Display Recipes
    // $(document).on("click","#generateRecipe", function(event) {
    //         getRecipes();
    //     for (var i = 0; i < response.hits.length; i++) {
    //         $("#apiRecipes").append(response.hits.recipe.source);
    //         console.log(response.hits.recipe.source);
    //     }
    // });

  });
//
//   $(document).on("click",".recipe", showRecipes);
//     // Calling the renderButtons function at least once to display the initial list of foods
//
//
//   //Grabbing and storing the data-food property value from the button
//   function showRecipes() {
//     var recipes = $(this).attr('data-name');
//
//     //function to prevent repeat buttons
//     $("#recipeRowOne").empty();
//     $("#recipeRowTwo").empty();
//     $("#recipeRowThree").empty();
//     $("#recipeRowFour").empty();
//     renderButtons()
//
//   //Perfoming an AJAX GET request to our queryURL
//
//
//
//       //Storing the array as a variable name
//       var recipeArr =response.data;
//
//       //looping through the array in queryURL
//       for (var i=0; i<recipeArr.length; i++) {
//
//         var foodRecipes = $('<div class="col-sm-3">')
//
//       }
//     });
//   };
// });
