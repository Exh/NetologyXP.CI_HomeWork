"use strick"

var assert    = require('chai').assert;
var BookShop = require('./../book_shop');

suite('buy Harry Potter books', function () {

    test('I put "Harry Potter and the Philosopher\'s Stone" in cart. Total cost of my cart is 8 EUR', function(){
        bookshop = new BookShop();
        bookshop.put("Harry Potter and the Philosopher's Stone");

        res = bookshop.totalCost();

        assert.equal(res, 8)
    });

    test('I put two same "Harry Potter and the Philosopher\'s Stone" in cart. Total cost of my cart is 16 EUR', function(){
        bookshop = new BookShop();
        bookshop.put("Harry Potter and the Philosopher's Stone");
        bookshop.put("Harry Potter and the Philosopher's Stone");

        res = bookshop.totalCost();

        assert.equal(res, 16)
    });

    test('I put "Harry Potter and the Philosopher\'s Stone" & "Harry Potter and the Chamber of Secrets" in cart. Total cost of my cart is 15.2 EUR', function(){
        bookshop = new BookShop();
        bookshop.put("Harry Potter and the Philosopher's Stone");
        bookshop.put("Harry Potter and the Chamber of Secrets");

        res = bookshop.totalCost();

        assert.equal(res, 16 - (16 / 100.0 * 5))
    });

    test('I put "Harry Potter and the Philosopher\'s Stone" & "Harry Potter and the Chamber of Secrets" & "Harry Potter and the Prisoner of Azkaban" in cart. Total cost of my cart is 21.6 EUR', function(){
        bookshop = new BookShop();
        bookshop.put("Harry Potter and the Philosopher's Stone");
        bookshop.put("Harry Potter and the Chamber of Secrets");
        bookshop.put("Harry Potter and the Prisoner of Azkaban");

        res = bookshop.totalCost();

        assert.equal(res, 24 - (24 / 100.0 * 10))
    });

    test('I put "Harry Potter and the Philosopher\'s Stone" & "Harry Potter and the Chamber of Secrets" & "Harry Potter and the Prisoner of Azkaban" in cart. Total cost of my cart is 21.6 EUR', function(){
        bookshop = new BookShop();
        bookshop.put("Harry Potter and the Philosopher's Stone");
        bookshop.put("Harry Potter and the Chamber of Secrets");
        bookshop.put("Harry Potter and the Prisoner of Azkaban");

        res = bookshop.totalCost();

        assert.equal(res, 24 - (24 / 100.0 * 10))
    });

    test('I put "Harry Potter and the Philosopher\'s Stone" & "Harry Potter and the Chamber of Secrets" & "Harry Potter and the Prisoner of Azkaban" & "Harry Potter and the Goblet of Fire" in cart. Total cost of my cart is 25.6 EUR', function(){
        bookshop = new BookShop();
        bookshop.put("Harry Potter and the Philosopher's Stone");
        bookshop.put("Harry Potter and the Chamber of Secrets");
        bookshop.put("Harry Potter and the Prisoner of Azkaban");
        bookshop.put("Harry Potter and the Goblet of Fire");

        res = bookshop.totalCost();

        var cost = (4 * 8);
        assert.equal(res, cost - (cost / 100.0 * 20))
    });

});