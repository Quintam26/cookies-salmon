'use strict';

/*
Sales

-The minimum number of customers per hour.
-The maximum number of customers per hour.
-The average number of cookies purchased per customer.*/

const sales = {
//properties
    Location: 'PDX Airport',
    minCust: '23',
    maxCust: '65',
    avgCookieSale: 6.3,
    //methods
    getRandomInt: function() {
        return console.log(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));

    }
};

sales.getRandomInt();

const sales2 = {
//properties
    Location: 'Pioneer Square',
    minCust: '3',
    maxCust: '24',
    avgCookieSale: 1.2,
//methods
};

const sales3 = {
//porperties
    Location: 'Powell\'s',
    minCust: '11',
    maxCust: '38',
    avgCookieSale: 3.7,
//methods

};

const sales4 = {
//properties
    Location: 'St. John\'s',
    minCust: '20',
    maxCust: '38',
    avgCookieSale: 2.3,
//methods

};

const sales5 = {
//properties
    Location: 'Waterfront',
    minCust: '2',
    maxCust: '16',
    avgCookieSale: 4.6,
//methods
};

function newFunction(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}
