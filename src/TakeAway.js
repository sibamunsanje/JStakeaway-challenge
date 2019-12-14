function TakeAway() {
  this.dishes = {};
}

TakeAway.prototype.getDishes = function() {
  return this.dishes;
};
TakeAway.prototype.setDishes = function(orders) {
  return this.dishes = orders;
};
