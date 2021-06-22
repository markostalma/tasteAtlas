app.component('selectedRecipes', {
  templateUrl: './app/templates/selected-recipes.html',
  controller: function selectedRecipesCtrl($scope) {
    // Slick Init with settings
    $scope.selectedRecipes = {
      centerMode: true,
      enabled: true,
      dots: false,
      infinite: true,
      autoplay: true,
      draggable: true,
      prevArrow: false,
      nextArrow: false,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 9999,
          settings: "unslick"
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };
  }
});
