app.component('searchRecipes', {
  templateUrl: './app/templates/search-recipes.html',
  controller: function searchRecipesCtrl($scope, bestRecipesData) {
    // Slisck slider settings
    slickSettings = {
      centerMode: true,
      dots: false,
      infinite: true,
      autoplay: true,
      draggable: true,
      prevArrow: false,
      nextArrow: false,
      speed: 100,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 9999,
          settings: "unslick"
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
    };
    // Init Slick slider 
    $scope.searchRecipesOne = slickSettings;
    $scope.searchRecipesTwo = slickSettings;
    // Get data from input on submit
    $scope.submitSearch = function() {
      if ($scope.searchRecipe) {
        bestRecipesData.recipeData($scope.searchRecipe);
      } 
    };
  }
});