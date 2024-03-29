"use strict";

describe("TakeAway", function() {
  var takeaway;

  beforeEach(function () {
    takeaway = new TakeAway();
  });
  it("it has a list of dishes with prices", function() {
    expect(takeaway.getDishes()).toEqual({});
  });

  it("can order a number of available dishes", function () {
    var orders = {squid:7.90, prawns:8.90, friedrice:7.20, sprite:1.10};
    takeaway.setDishes(orders);
    expect(takeaway.getDishes()).toEqual(orders);
  })

});
