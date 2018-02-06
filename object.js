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
    avgCookieSale: '6.3',
    cookiesArray: [],
    time: ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','8pm:'],
    //methods

    getRandomCookies: function() {
        let i = 0;
        for (i = 0; i < 15; i++);{
            const custPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
            console.log(custPerHour);
            const cookiePerHour = Math.round(this.avgCookieSale * custPerHour);
            console.log(cookiePerHour);
            this.cookiesArray.push(cookiePerHour);
            console.log(this.time[2]);
        }
    },

    /* cookiesPerDay: function(){
        let i = 0;
        for (i = 0; i < 15; i++){

        }

    }*/

    createCookiesList: function(){
        let i = 0;
        for (i = 0; i < 15; i++);{
            const parent = document.getElementById('parent');
            const list = document.createElement('li');
            list.textContent = this.time[i] + this.cookiePerHour[i];
            parent.appendChild(list);
            console.log(list);

        }
    }
};

sales.getRandomCookies();
sales.createCookiesList();
//sales.cookiesPerDay();
/*

const sales2 = {
//properties
    Location: 'Pioneer Square',
    minCust: '3',
    maxCust: '24',
    avgCookieSale: 1.2,
    //methods
    getRandomInt2: function() {
        return console.log(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
    }
};

//sales2.getRandomInt2();

const sales3 = {
//porperties
    Location: 'Powell\'s',
    minCust: '11',
    maxCust: '38',
    avgCookieSale: 3.7,
    //methods
    getRandomInt3: function() {
        return console.log(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
    }

};

//sales3.getRandomInt3();

const sales4 = {
//properties
    Location: 'St. John\'s',
    minCust: '20',
    maxCust: '38',
    avgCookieSale: 2.3,
    //methods
    getRandomInt4: function() {
        return console.log(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
    }

};

//sales4.getRandomInt4 ();

const sales5 = {
//properties
    Location: 'Waterfront',
    minCust: '2',
    maxCust: '16',
    avgCookieSale: 4.6,
    //methods
    getRandomInt5: function() {
        return console.log(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
    }

};

//sales5.getRandomInt5();

*/
