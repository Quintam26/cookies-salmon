'use strict';


function Sale(Location, minCust, maxCust, avgCookieSale, parentId) {
    this.Location = Location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSale = avgCookieSale;
    this.parentId = parentId;
    this.cookiesArray = [];
    this.time = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: ', 'Total: '];

}
//methods

Sale.prototype.getRandomCookies = function() {
    for (let i = 0; i < 15; i++) {
        const custPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
        const cookiePerHour = Math.round(this.avgCookieSale * custPerHour);
        this.cookiesArray.push(cookiePerHour);

    }
};

Sale.prototype.cookiesPerday = function() {
    let totalCookies = 0;
    for(let i = 0; i < this.cookiesArray.length; i++) {
        totalCookies += this.cookiesArray[i];

    }
    this.cookiesArray.push(totalCookies);

};

/*Sale.prototype.createCookiesList = function() {
    for(let i = 0; i < this.cookiesArray.length; i++) {
        const list = document.getElementById(this.parentId);
        const li = document.createElement('li');
        li.textContent = this.time[i] + this.cookiesArray[i] + ' cookies';
        list.appendChild(li);
    }
};
*/
Sale.prototype.createCookiesRow = function() {
    const table = document.querySelector('#place');
    const tr = document.createElement('tr');
    table.appendChild(tr);
    for(let i = 0; i < this.cookiesArray.length; i++) {
        const td = document.createElement('td');
        td.textContent = this.cookiesArray[i];
        tr.appendChild(td);

    }
};

const sale = new Sale ('PDX Airport', '23', '65', '6.3', 'pdx airport');
sale.getRandomCookies();
sale.cookiesPerday();
sale.createCookiesRow();
//sale.createCookiesList();


const sale2 = new Sale ('Pionner Square', '3', '24', '1.6', 'pioneer square');
sale2.getRandomCookies();
sale2.cookiesPerday();
sale2.createCookiesRow();
//sale2.createCookiesList();

const sale3 = new Sale ('Powell\'s', '11', '38', '3.7', 'powell\'s');
sale3.getRandomCookies();
sale3.cookiesPerday();
sale3.createCookiesRow();
//sale3.createCookiesList();

const sale4 = new Sale ('St. John\'s', '20', '38', '2.3', 'st. john\'s');
sale4.getRandomCookies();
sale4.cookiesPerday();
sale4.createCookiesRow();
//sale4.createCookiesList();

const sale5 = new Sale ('Waterfront', '2', '16', '4.6', 'waterfront');
sale5.getRandomCookies();
sale5.cookiesPerday();
sale5.createCookiesRow();
//sale5.createCookiesList();




/*
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

    cookiesPerDay: function() {
        let totalCookies = 0;
        for (let i = 0; i < this.cookiesArray.length; i++) {
            totalCookies += this.cookiesArray[i];
            //console.log('this total cookies', totalCookies);

        }
        this.cookiesArray.push(totalCookies);

    },

    createCookiesList: function() {
        for (let i = 0; i < this.cookiesArray.length; i++) {
            const list = document.getElementById('PDX Airport');
            const li = document.createElement('li');
            li.textContent = this.time[i] + this.cookiesArray[i] + ' cookies';
            list.appendChild(li);

        }
    },
};

sales.getRandomCookies();
sales.cookiesPerDay();
sales.createCookiesList();

const sales2 = {
//properties
    Location: 'Pioneer Square',
    minCust: '3',
    maxCust: '24',
    avgCookieSale: '1.2',
    cookiesArray: [],
    time: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: ', 'Total: '],
    //methods

    getRandomCookies2: function() {
        for (let i = 0; i < 15; i++) {
            const custPerHour = Math.floor( Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
            const cookiePerHour = Math.round(this.avgCookieSale * custPerHour);
            this.cookiesArray.push(cookiePerHour);

        }
    },

    cookiesPerDay: function() {
        let totalCookies = 0;
        for (let i = 0; i < this.cookiesArray.length; i++) {
            totalCookies += this.cookiesArray[i];

        }
        this.cookiesArray.push(totalCookies);

    },

    createCookiesList: function() {
        for (let i = 0; i < this.cookiesArray.length; i++) {
            const list = document.getElementById('Pioneer Square');
            const li = document.createElement('li');
            li.textContent = this.time[i] + this.cookiesArray[i] + ' cookies';
            list.appendChild(li);

        }
    },

};

sales2.getRandomCookies2();
sales2.cookiesPerDay();
sales2.createCookiesList();

const sales3 = {
//porperties
    Location: 'Powell\'s',
    minCust: '11',
    maxCust: '38',
    avgCookieSale: 3.7,
    cookiesArray: [],
    time: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: ', 'Total: '],
    //methods
    getRandomCookies3: function() {
        for(let i = 0; i < 15 ; i++) {
            const custPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
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
        for (let i = 0; i < this.cookiesArray.length; i++) {
            const list = document.getElementById ('Powells');
            const li = document.createElement('li');
            li.textContent = this.time[i] + this.cookiesArray[i] + ' cookies';
            list.appendChild(li);

        }
    },
};

sales3.getRandomCookies3();
sales3.cookiesPerDay();
sales3.createCookiesList();

const sales4 = {
//properties
    Location: 'St. John\'s',
    minCust: '20',
    maxCust: '38',
    avgCookieSale: 2.3,
    cookiesArray: [],
    time: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: ', 'Total: '],
    //methods
    getRandomCookies4: function() {
        for(let i = 0; i < 15; i++) {
            const custPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
            const cookiePerHour = Math.round(this.avgCookieSale * custPerHour);
            this.cookiesArray.push(cookiePerHour);
        }
    },

    cookiesPerDay: function(){
        let totalCookies = 0;
        for(let i = 0; i < this.cookiesArray.length; i++) {
            totalCookies += this.cookiesArray[i];
        }
        this.cookiesArray.push(totalCookies);
    },

    createCookiesList: function(){
        for(let i = 0; i < this.cookiesArray.length; i++) {
            const list = document.getElementById('St. Johns');
            const li = document.createElement('li');
            li.textContent = this.time[i] + this.cookiesArray[i] + ' cookies';
            list.appendChild(li);
        }

    },
};

sales4.getRandomCookies4 ();
sales4.cookiesPerDay();
sales4.createCookiesList();

const sales5 = {
//properties
    Location: 'Waterfront',
    minCust: '2',
    maxCust: '16',
    avgCookieSale: 4.6,
    cookiesArray: [],
    time: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: ', 'Total: '],
    //methods
    getRandomCookies5: function() {
        for(let i = 0; i < 15; i++) {
            const custPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
            const cookiePerHour = Math.round(this.avgCookieSale * custPerHour);
            this.cookiesArray.push(cookiePerHour);

        }
    },

    cookiesPerDay: function(){
        let totalCookies = 0;
        for(let i = 0; i < this.cookiesArray.length; i++) {
            totalCookies += this.cookiesArray[i];

        }
        this.cookiesArray.push(totalCookies);
    },

    createCookiesList: function(){
        for(let i = 0; i < this.cookiesArray.length; i ++) {
            const list = document.getElementById('Waterfront');
            const li = document.createElement('li');
            li.textContent = this.time[i] + this.cookiesArray[i] + ' cookies';
            list.appendChild(li);

        }

    }
};

sales5.getRandomCookies5();
sales5.cookiesPerDay();
sales5.createCookiesList();

*/

