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
        for (var key in this._cart) {
            return 8 * this._cart[key];
        }
    }
}

module.exports = BookShop;