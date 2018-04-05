$(document).ready(function() {

  $(document).ready(function(){
    $('.slider').slider();
  });

// Initialize Firebase //

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
  
    // Variables for Category Ingredients

    var dairyProducts =["almond milk", "skim milk", "whole milk", "butter milk", "soy milk", "cashew milk", "coconut milk", "rice milk", "hemp milk", "butter", "sour cream", "mozzarella cheese", "feta cheese", "parmesan cheese", "cottage cheese", "American cheese", "cheddar cheese", "Swiss cheese", "provolone cheese", "monterey cheese", "pecorino romano", "eggs"];
    
    var breadProducts = ["whole wheat bread", "white bread", "sourdough bread", "pita bread", "naan bread", "rye bread", "brioche", "ciabatta bread", "roti", "tortilla", "pumpernickel bread", "flatbread", "spaghetti", "linguine", "penne", "rigatoni", "orzo", "farfalle", "lasagna noodles", "ravioli"];

    var nutsSeedsProducts= ["almonds", "peanuts", "cashews", "Brazil nuts", "hazelnuts", "macadamia", "pecans", "pine nuts", "pistachios", "walnuts", "chestnuts", "sunflower seeds", "pumpkin seeds", "chia seeds", "sesame seeds", "hemp seeds", "flax seeds"]

    var legumesProducts= ["chick peas", "lentils", "green peas", "kidney beans", "pinto beans", "black beans", "soybeans", "lima beans", "navy beans", "green beans", "cannellini beans", "mung beans", "snap peas", "cranberry beans", "fava beans", "black-eyed peas", "cowpeas", "pigeon peas", "snow peas"];

    var rootVegetablesProducts= ["sweet potatoes", "yams", "yuca", "coco malanga", "carrots", "parsnips", "rutabaga", "turnip", "beets", "jicama", "taro root", "ginger", "potatoes", "arrowroot", "radish", "onions", "garlic", "celery", "horseradish", "daikon", "eggplant"];

    var herbsProducts = [ "parsley", "cilantro", "dill", "tarragon", "rosemary", "basil", "oregano", "thyme", "sage", "mint", "lemon grass", "fennel"];

    var leafyGreensProducts= ["kale", "collard greens", "spinach", "swiss chard", "turnip greens", "mustard greens", "broccoli rabe", "romaine lettuce", "iceberg lettuce", "butterhead lettuce", "bok choy", "cabbage", "watercress", "endive", "arugula", "beet greens", "broccoli", "cauliflower", "brussels sprouts"];

    var squashProducts = ["acorn squash", "butternut squash", "kabocha squash", "spaghetti squash", "autumn cup squash", "banana squash", "pumpkin", "zucchini", "straightneck(yellow) squash"];

    var fruitProducts= ["banana", "strawberries", "apples", "mango",  "cantaloupe", "honeydew",  "watermelon", "blackberries", "blueberries", "peaches", "cherries", "oranges", "grapefruit", "pineapple", "pears", "raspberries", "kiwi", "pomegranate", "grapes", "plum"];

    var ingredientSelected = [];
  
    // Get Dairy Products and create as button
      function getDairyProducts() {

        $("#ingredients").empty();

          for (var i = 0; i < dairyProducts.length; i++) {
              //debugger;
              var newButton = $("<button id= '" + dairyProducts[i] + "'></button>");
              // console.log(newButton);
              newButton.addClass("btn btn-default dairyBtn");
              newButton.attr("type", "button");
              newButton.append(dairyProducts[i]);
              newButton.attr("value", dairyProducts[i]);
              $("#ingredients").append(newButton);

              console.log("click");
              console.log(dairyProducts);
          }
      }
  // ----------------------------------------------------------------------------------------------------------------------------- //
    // Get Bread Products and create as button
      function getBreadProducts() {

        $("#ingredients").empty();

          for (var i = 0; i < breadProducts.length; i++) {
              //debugger;
              var newButton = $("<button id= '" + breadProducts[i] + "'></button>");
              // console.log(newButton);
              newButton.addClass("btn btn-default breadBtn");
              newButton.attr("type", "button");
              newButton.append(breadProducts[i]);
              newButton.attr("value", breadProducts[i]);
              $("#ingredients").append(newButton);

              console.log("click");
              console.log(breadProducts);
          }
      }

   // ----------------------------------------------------------------------------------------------------------------------------- //
    // Get Nuts and Seeds Products and create as button
      function getNutsandSeedsProducts() {

        $("#ingredients").empty();

          for (var i = 0; i < nutsSeedsProducts.length; i++) {
              //debugger;
              var newButton = $("<button id= '" + nutsSeedsProducts[i] + "'></button>");
              // console.log(newButton);
              newButton.addClass("btn btn-default nutsSeedsBtn");
              newButton.attr("type", "button");
              newButton.append(nutsSeedsProducts[i]);
              newButton.attr("value", nutsSeedsProducts[i]);
              $("#ingredients").append(newButton);

              console.log("click");
              console.log(nutsSeedsProducts);
          }
      }

   // ----------------------------------------------------------------------------------------------------------------------------- //
    // Get Legumes Products and create as button
      function getlegumesProducts() {

        $("#ingredients").empty();

          for (var i = 0; i < legumesProducts.length; i++) {
              //debugger;
              var newButton = $("<button id= '" + legumesProducts[i] + "'></button>");
              // console.log(newButton);
              newButton.addClass("btn btn-default legumesBtn");
              newButton.attr("type", "button");
              newButton.append(legumesProducts[i]);
              newButton.attr("value", legumesProducts[i]);
              $("#ingredients").append(newButton);

              console.log("click");
              console.log(legumesProducts);
          }
      }
  // ----------------------------------------------------------------------------------------------------------------------------- //   
     // Get Root Vegetable Products and create as button
     function getrootVegetablesProducts() {

      $("#ingredients").empty();

          for (var i = 0; i < rootVegetablesProducts.length; i++) {
              //debugger;
              var newButton = $("<button id= '" + rootVegetablesProducts[i] + "'></button>");
              // console.log(newButton);
              newButton.addClass("btn btn-default rootVegetablesBtn");
              newButton.attr("type", "button");
              newButton.append(rootVegetablesProducts[i]);
              newButton.attr("value", rootVegetablesProducts[i]);
              $("#ingredients").append(newButton);

              console.log("click");
              console.log(rootVegetablesProducts);
          }
      }
 // ----------------------------------------------------------------------------------------------------------------------------- //
     // Get Herbs Products and create as button
     function getherbsProducts() {

      $("#ingredients").empty();

          for (var i = 0; i < herbsProducts.length; i++) {
              //debugger;
              var newButton = $("<button id= '" + herbsProducts[i] + "'></button>");
              // console.log(newButton);
              newButton.addClass("btn btn-default herbsBtn");
              newButton.attr("type", "button");
              newButton.append(herbsProducts[i]);
              newButton.attr("value", herbsProducts[i]);
              $("#ingredients").append(newButton);

              console.log("click");
              console.log(herbsProducts);
          }
      }
  
  // ----------------------------------------------------------------------------------------------------------------------------- //
     // Get Leafy Greens Products and create as button
     function getleafyGreensProducts() {

      $("#ingredients").empty();

          for (var i = 0; i < leafyGreensProducts.length; i++) {
              //debugger;
              var newButton = $("<button id= '" + leafyGreensProducts[i] + "'></button>");
              // console.log(newButton);
              newButton.addClass("btn btn-default leafyGreensBtn");
              newButton.attr("type", "button");
              newButton.append(leafyGreensProducts[i]);
              newButton.attr("value", leafyGreensProducts[i]);
              $("#ingredients").append(newButton);

              console.log("click");
              console.log(leafyGreensProducts);
          }
      }

  // ----------------------------------------------------------------------------------------------------------------------------- //
    // Get Squash Products and create as button
    function getsquashProducts() {

      $("#ingredients").empty();

          for (var i = 0; i < squashProducts.length; i++) {
              //debugger;
              var newButton = $("<button id= '" + squashProducts[i] + "'></button>");
              // console.log(newButton);
              newButton.addClass("btn btn-default squashBtn");
              newButton.attr("type", "button");
              newButton.append(squashProducts[i]);
              newButton.attr("value", squashProducts[i]);
              $("#ingredients").append(newButton);

              console.log("click");
              console.log(squashProducts);
          }
      }

  // ----------------------------------------------------------------------------------------------------------------------------- //
      // Get Fruits Products and create as button
      function getfruitProducts() {

        $("#ingredients").empty();

            for (var i = 0; i < fruitProducts.length; i++) {
                //debugger;
                var newButton = $("<button id= '" + fruitProducts[i] + "'></button>");
                // console.log(newButton);
                newButton.addClass("btn btn-default fruitsBtn");
                newButton.attr("type", "button");
                newButton.append(fruitProducts[i]);
                newButton.attr("value", fruitProducts[i]);
                $("#ingredients").append(newButton);

                console.log("click");
                console.log(fruitProducts);
            }
        }

    //Display Ingredients based on Category button clicked
      $('#dairyButton').on("click", function(event) {
        getDairyProducts();
      }); 

      $('#breadButton').on("click", function(event) {
        getBreadProducts();
      });
      
      $('#nutsSeedsButton').on("click", function(event) {
        getNutsandSeedsProducts();
      });

      $('#legumesButton').on("click", function(event) {
        getlegumesProducts();
      });

      $('#rootVegetablesButton').on("click", function(event) {
        getrootVegetablesProducts();
      });

      $('#herbsButton').on("click", function(event) {
        getherbsProducts();
      });

      $('#leafyGreensButton').on("click", function(event) {
        getleafyGreensProducts();
      });

      $('#squashButton').on("click", function(event) {
        getsquashProducts();
      });

      $('#fruitsButton').on("click", function(event) {
        getfruitProducts();
      });

  // --------------------------------------------------------------------------------------------------------- //    

    // Display chosen ingredient in Selected Ingredient Panel <--- Dairy
      $(document).on("click",".dairyBtn", function(event) {
        
          var ingrd = this.id;
        
          $('#selectedIngredients').append(ingrd);
          $('#selectedIngredients').append(" ");
          console.log(ingrd);
          
          ingredientSelected.push(ingrd);
          console.log(ingredientSelected);
        
      });

      $(document).on("click","#generateRecipe", function(event) {
        console.log("Recipe search button");
        getRecipes();
      });

  // --------------------------------------------------------------------------------------------------------- //

  // Display chosen ingredient in Selected Ingredient Panel <--- Bread 
    $(document).on("click",".breadBtn", function(event) {
        
      var ingrd = this.id;
    

      $('#selectedIngredients').append(ingrd);
      $('#selectedIngredients').append(" ");
      console.log(ingrd);
      
      ingredientSelected.push(ingrd);
      console.log(ingredientSelected);
    
    });

    $(document).on("click","#generateRecipe", function(event) {
      console.log("Recipe search button");
      getRecipes();
    });

// --------------------------------------------------------------------------------------------------------- //

  // Display chosen ingredient in Selected Ingredient Panel <--- Nuts and Seeds 
  $(document).on("click",".nutsSeedsBtn", function(event) {
        
    var ingrd = this.id;
  

    $('#selectedIngredients').append(ingrd);
    $('#selectedIngredients').append(" ");
    console.log(ingrd);
    
    ingredientSelected.push(ingrd);
    console.log(ingredientSelected);
  
  });

  $(document).on("click","#generateRecipe", function(event) {
    console.log("Recipe search button");
    getRecipes();
  });

// --------------------------------------------------------------------------------------------------------- //

  // Display chosen ingredient in Selected Ingredient Panel <--- Legumes  
  $(document).on("click",".legumesBtn", function(event) {
        
    var ingrd = this.id;
  

    $('#selectedIngredients').append(ingrd);
    $('#selectedIngredients').append(" ");
    console.log(ingrd);
    
    ingredientSelected.push(ingrd);
    console.log(ingredientSelected);
  
  });

  $(document).on("click","#generateRecipe", function(event) {
    console.log("Recipe search button");
    getRecipes();
  });


// --------------------------------------------------------------------------------------------------------- //

  // Display chosen ingredient in Selected Ingredient Panel <--- Root Vegetables  
  $(document).on("click",".rootVegetablesBtn", function(event) {
        
    var ingrd = this.id;
  

    $('#selectedIngredients').append(ingrd);
    $('#selectedIngredients').append(" ");
    console.log(ingrd);
    
    ingredientSelected.push(ingrd);
    console.log(ingredientSelected);
  
  });

  $(document).on("click","#generateRecipe", function(event) {
    console.log("Recipe search button");
    getRecipes();
  });

// --------------------------------------------------------------------------------------------------------- //
  // Display chosen ingredient in Selected Ingredient Panel <--- Herbs 
  $(document).on("click",".herbsBtn", function(event) {
        
    var ingrd = this.id;
  

    $('#selectedIngredients').append(ingrd);
    $('#selectedIngredients').append(" ");
    console.log(ingrd);
    
    ingredientSelected.push(ingrd);
    console.log(ingredientSelected);
  
  });

  $(document).on("click","#generateRecipe", function(event) {
    console.log("Recipe search button");
    getRecipes();
  });

// --------------------------------------------------------------------------------------------------------- //
  // Display chosen ingredient in Selected Ingredient Panel <--- Leafy Greens 
  $(document).on("click",".leafyGreensBtn", function(event) {
        
    var ingrd = this.id;
  

    $('#selectedIngredients').append(ingrd);
    $('#selectedIngredients').append(" ");
    console.log(ingrd);
    
    ingredientSelected.push(ingrd);
    console.log(ingredientSelected);
  
  });

  $(document).on("click","#generateRecipe", function(event) {
    console.log("Recipe search button");
    getRecipes();
  });


// --------------------------------------------------------------------------------------------------------- //
  // Display chosen ingredient in Selected Ingredient Panel <--- Squash 
  $(document).on("click",".squashBtn", function(event) {
        
    var ingrd = this.id;
  

    $('#selectedIngredients').append(ingrd);
    $('#selectedIngredients').append(" ");
    console.log(ingrd);
    
    ingredientSelected.push(ingrd);
    console.log(ingredientSelected);
  
  });

  $(document).on("click","#generateRecipe", function(event) {
    console.log("Recipe search button");
    getRecipes();
  });

// --------------------------------------------------------------------------------------------------------- //
  // Display chosen ingredient in Selected Ingredient Panel <--- Fruit 
  $(document).on("click",".fruitsBtn", function(event) {
        
    var ingrd = this.id;
  

    $('#selectedIngredients').append(ingrd);
    $('#selectedIngredients').append(" ");
    console.log(ingrd);
    
    ingredientSelected.push(ingrd);
    console.log(ingredientSelected);
  
  });

  $(document).on("click","#generateRecipe", function(event) {
    console.log("Recipe search button");
    getRecipes();
  });


// Clear button reset (will clear out all of the text boxes without a page refresh //

  $("#clearRecipe").on("click", function(event) {
    event.preventDefault(); 

    $("#ingredients").html("");
    $("#selectedIngredients").html("");
    $("#apiRecipes").html("") 

    console.log("i cleared the sections");

  }); // <-- Closing of onclick Event for clear button //    


  

    
 // --------------------------------------------------------------------------------------------------------- // 
  // Function for displaying initial recipe array elements as buttons//
    function getRecipes() {
        var apiKey = "899742294e75cfd27b128b2974895e4d";
        var queryURL = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?app_id=2d2c9393&q=" + ingredientSelected + "&app_key=" + apiKey + "&limit=16";
        console.log(queryURL);
  
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {
          var hits = response.hits;
          for (var i = 0; i < hits.length; i++) {
            console.log(hits[i].recipe.image);

            // var apiImage = $("<img src= '" + hits[i].recipe.image + "'></img>");
            var apiImage = $("<a href =" + hits[i].recipe.shareAs + " target='_blank'><img src= '" + hits[i].recipe.image + "'></img></a>")
            //apiImage.append(response.hits[i].recipe.image);
            $("#apiRecipes").append(apiImage);
            $("#apiRecipes").append("     ");
        }
      });
        
    } 
    
  // <------------------------------------- Up until here the code for the Food Api works ---------------------------------->
    
  
  //disableButton(); 

      //Display Recipes

    // $(document).on("click",".recipe", showRecipes);
    //   // Calling the renderButtons function at least once to display the initial list of foods
  
  
    // //Grabbing and storing the data-food property value from the button
    // function showRecipes() {
    //   var recipes = $(this).attr('data-name'); 
  
    //   //function to prevent repeat buttons
    //   $("#recipeRowOne").empty();
    //   $("#recipeRowTwo").empty();
    //   $("#recipeRowThree").empty();
    //   $("#recipeRowFour").empty();
    //   renderButtons()
  
    // //Perfoming an AJAX GET request to our queryURL      
  
  
    //     //Storing the array as a variable name
    //     var recipeArr =response.data;
        
    //     //looping through the array in queryURL
    //     for (var i=0; i<recipeArr.length; i++) {
  
    //       var foodRecipes = $('<div class="col-sm-3">')
        
    //     }

    // };
  });
