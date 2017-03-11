"use strick"

var assert    = require('chai').assert;
var BookShop = require('./book_shop');

suite('buy Harry Potter books', function () {

    test('I put "Harry Potter and the Philosopher\'s Stone" in cart. Total cost of my cart is 8 EUR', function(){
        bookshop = new BookShop();

        res = bookshop.totalCost();

        assert.equal(res, 8)
    });

});