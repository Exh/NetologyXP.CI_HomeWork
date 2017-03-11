"use strick"

class BookShop
{
    constructor()
    {
        this._cart= [];
    }

    put(book)
    {
        if (book in this._cart)
            this._cart[book] += 1;
        else
            this._cart[book] = 1
    }

    totalCost()
    {
        var total = 0;
        var discount = 0;
        for (var key in this._cart) {
            total += 8 * this._cart[key];
        }
        var size = Object.keys(this._cart).length;
        if (size > 2)
            discount = 10;
        else if (size > 1)
            discount = 5;
        return total - (total / 100 * discount)
    }
}

module.exports = BookShop;