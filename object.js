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
    time: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: ', 'Total: '],

    //methods
    getRandomCookies: function() {
        for (let i = 0; i < 15; i++) {
            const custPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
            // console.log(custPerHour);
            const cookiePerHour = Math.round(this.avgCookieSale * custPerHour);
            //console.log(cookiePerHour);
            this.cookiesArray.push(cookiePerHour);
            //console.log(this.time);
        }
    },

    cookiesPerDay: function(){
        let totalCookies = 0;
        for (let i = 0; i < this.cookiesArray.length; i++) {
            totalCookies += this.cookiesArray[i];
            //console.log('this total cookies', totalCookies);

        }
        this.cookiesArray.push(totalCookies);

    },

    createCookiesList: function(){
        for (let i = 0; i < this.cookiesArray.length; i++) {
            const list = document.getElementById('PDX Airport');
            const li = document.createElement('li');
            li.textContent = this.time[i] + this.cookiesArray[i] + ' cookies';
            list.appendChild(li);
        /* console.log(list);
            console.log(this.cookiesArray);
            console.log(i); */

        }
    }
};

sales.getRandomCookies();
sales.cookiesPerDay();
sales.createCookiesList();



const sales2 = {
//properties
    Location: 'Pioneer Square',
    minCust: '3',
    maxCust: '24',
    avgCookieSale: 1.2,
    cookiesArray: [],
    time: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: ', 'Total: '],
    //methods

    getRandomCookie: function() {
        for(let i = 0; this.cookiesArray.length; i++) {
            const custPerHour = Math.floor( Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
            const cookiePerHour = Math.round(this.avgCookieSale * custPerHour);
            this.cookiesArray.push(cookiePerHour);

        }
    },

    cookiesPerDay: function() {
        let totalCookies = 0;
        for(let i = 0; i < this.cookiesArray.length; i++) {
            totalCookies += this.cookiesArray[i];

        }

        this.cookiesArray.push(totalCookies);

    },

    createCookiesList: function() {
        for(let i = 0; i < this.cookiesArray.length; i++)
            const list = document.getElementById


    }

};

//sales2.getRandomInt2();

const sales3 = {
//porperties
    Location: 'Powell\'s',
    minCust: '11',
    maxCust: '38',
    avgCookieSale: 3.7,
    cookiesArray: [],
    time: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: ', 'Total: '],
    //methods
    getRandomInt3: function() {
        for(let i = 0; i < this.cookiesArray.length; i++)
        (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
    }

};

//sales3.getRandomInt3();

const sales4 = {
//properties
    Location: 'St. John\'s',
    minCust: '20',
    maxCust: '38',
    avgCookieSale: 2.3,
    cookiesArray: [],
    time: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: ', 'Total: '],
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
    cookiesArray: [],
    time: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: ', 'Total: '],
    //methods
    getRandomInt5: function() {
        return console.log(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
    }

};

//sales5.getRandomInt5();


