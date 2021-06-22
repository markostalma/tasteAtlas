// Data Recipes Service
app.service("bestRecipesData", function ($q) {
  dataSearch = [];
  updater = $q.defer();
  function recipeData(searchRecipe) {
      dataSearch.push(searchRecipe);
      updater.notify(dataSearch);
      dataSearch = [];
  }
  return {
      allRecipes: recipes,
      recipeData: recipeData,
      onSearch: updater.promise
  }
});

// Recipes Data
var recipes = [
  {
    "id": 1,
    "type": "recipe-video",
    "name": "Zalogajčići od banana i maslaca od kikirikija",
    "category": "GLAVNA JELA",
    "duration": "30 min",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ...",
    "image": "./img/glavna-jela.png",
    "largeImage": "./img/glavna-jela-large.png"
  }, 
  {
    "id": 2,
    "type": "recipe-video",
    "name": "Zafrkanci s makom",
    "category": "DESERTI",
    "duration": "45 min",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    "image": "./img/deserti.png",
    "largeImage": "./img/deserti-large.png"
  }, 
  {
    "id": 3,
    "type": "recipe-post",
    "name": "Piletina s perecima u umaku od senfa i cheddar sira",
    "category": "DORUČAK",
    "duration": "15 min",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ...",
    "image": "./img/dorucak.png",
    "largeImage": "./img/dorucak-large.png"
  }, 
  {
    "id": 4,
    "type": "recipe-video",
    "name": "Zalogajčići od banana i maslaca od kikirikija",
    "category": "GLAVNA JELA",
    "duration": "20 min",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ...",
    "image": "./img/glavna-jela.png",
    "largeImage": "./img/glavna-jela-large.png"
  }, 
  {
    "id": 5,
    "type": "recipe-video",
    "name": "Zafrkanci s makom",
    "category": "DESERTI",
    "duration": "30 min",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    "image": "./img/deserti.png",
    "largeImage": "./img/deserti-large.png"
  }, 
  {
    "id": 6,
    "type": "recipe-post",
    "name": "Piletina s perecima u umaku od senfa i cheddar sira",
    "category": "DORUČAK",
    "duration": "30 min",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ...",
    "image": "./img/dorucak.png",
    "largeImage": "./img/dorucak-large.png"
  },
  {
    "id": 7,
    "type": "recipe-video",
    "type": "recipe-video",
    "name": "Zalogajčići od banana i maslaca od kikirikija",
    "category": "GLAVNA JELA",
    "duration": "20 min",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ...",
    "image": "./img/glavna-jela.png",
    "largeImage": "./img/glavna-jela-large.png"
  }, 
  {
    "id": 8,
    "type": "recipe-video",
    "name": "Zafrkanci s makom",
    "category": "DESERTI",
    "duration": "30 min",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    "image": "./img/deserti.png",
    "largeImage": "./img/deserti-large.png"
  }, 
  {
    "id": 9,
    "type": "recipe-post",
    "name": "Piletina s perecima u umaku od senfa i cheddar sira",
    "category": "DORUČAK",
    "duration": "30 min",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ...",
    "image": "./img/dorucak.png",
    "largeImage": "./img/glavna-jela-large.png"
  },
  {
    "id": 10,
    "type": "recipe-video",
    "name": "Zalogajčići od banana i maslaca od kikirikija",
    "category": "GLAVNA JELA",
    "duration": "20 min",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ...",
    "image": "./img/glavna-jela.png",
    "largeImage": "./img/glavna-jela-large.png"
  }, 
  {
    "id": 11,
    "type": "recipe-video",
    "name": "Zafrkanci s makom",
    "category": "DESERTI",
    "duration": "30 min",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    "image": "./img/deserti.png",
    "largeImage": "./img/deserti-large.png"
  }, 
  {
    "id": 12,
    "type": "recipe-post",
    "name": "Piletina s perecima u umaku od senfa i cheddar sira",
    "category": "DORUČAK",
    "duration": "30 min",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ...",
    "image": "./img/dorucak.png",
    "largeImage": "./img/dorucak-large.png"
  }
]