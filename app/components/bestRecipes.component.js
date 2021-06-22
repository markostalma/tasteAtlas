app.component('bestRecipes', {
  templateUrl: './app/templates/best-recipes.html',
  controller: function bestRecipesCtrl($scope, bestRecipesData) {
    $scope.allRecipes = bestRecipesData.allRecipes;
    $scope.notFoundTxt = null;

    bestRecipesData.onSearch.then(null, null, function(dataSearch) {
      searchResult = [];
      dataSearch = dataSearch.map(name => name.toLowerCase());

      for(let i = 0; i < bestRecipesData.allRecipes.length; i++) {
        if(bestRecipesData.allRecipes[i].name.toLowerCase().includes(dataSearch) ){
          searchResult.push(bestRecipesData.allRecipes[i]);
        }
      }

      if(searchResult.length !== 0){
        $scope.allRecipes = searchResult;
        $scope.notFoundTxt = "Pronađeno " + searchResult.length + " recepata";
      } else {
        $scope.allRecipes = bestRecipesData.allRecipes;
        $scope.notFoundTxt = "Nije pronađen nijedan recept. Pokušajte ponovo";
      }

    });
  }
});