"use strict";

describe("TakeAway", function()) {
  var TakeAway;

  beforeEach(function () {
    takeaway = new TakeAway();
  });
describe("it has a list of dishes with prices", function() {
    dishes = {squid:7.90, prawns:8.90, friedrice:7.20, sprite:1.10};
    takeaway.pickDishes(dishes);
    expect(menu.listDishes()).toEqual(dishes);
  });
