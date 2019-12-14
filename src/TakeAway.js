function TakeAway() {
  this.dishes = {squid:7.90, prawns:8.90, friedrice:7.20, sprite:1.10};
}

TakeAway.prototype.pickDishes = function () {
  return this.dishes
};
TakeAway.prototype.listDishes = function () {
  return this.dishes
};
