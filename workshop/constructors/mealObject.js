function Meal(id, name, description, season, price, amount, ingredients){
  // int, string, string, boolean, double, int, array[ingredienten]

  this.id = id;
  this.name = name;
  this.description = description;
  this.season = season;
  this.price = price;
  this.ingredients = ingredients;

  this.ordered = false;
  this.time = null;

}
