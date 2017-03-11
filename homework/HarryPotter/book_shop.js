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

        var cart = [];
        for (var key in this._cart) {
            cart[key] = this._cart[key];
        }

        var i = 0;
        while (Object.keys(cart).length > 0)
        {
            let discount = 0;
            let size = Object.keys(cart).length;
            if (size > 3)
                discount = 20;
            else if (size > 2)
                discount = 10;
            else if (size > 1)
                discount = 5;

            let cost = size * 8;

            total +=  cost - (cost / 100 * discount);

            for (var key in cart) {
                if (cart[key] == 1)
                    delete cart[key];
                else
                    cart[key] = cart[key] - 1
            }
        }
        return total
    }
}

module.exports = BookShop;