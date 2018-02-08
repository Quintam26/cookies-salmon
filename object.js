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

Sale.prototype.createCookiesTable = function() {
    const table = document.querySelector('#place');
    const tr = document.createElement('tr');
    table.appendChild(tr);
    for(let i = 0; i < this.cookiesArray.length; i++) {
        const td = document.createElement('td');
        td.textContent = this.cookiesArray[i];
        tr.appendChild(td);

    }
};

Sale.prototype.createCookiesTableHead = function() {
    const table = document.querySelector('#place');
    const tr = document.createElement('tr');
    table.appendChild(tr);
    for(let i = 0; i < this.time.length; i++) {
        const th = document.createElement('th');
        th.textContent = this.time[i];
        tr.appendChild(th);

    }
};

const sale = new Sale ('PDX Airport', '23', '65', '6.3', 'pdx airport');
sale.getRandomCookies();
sale.cookiesPerday();
sale.createCookiesTableHead();
sale.createCookiesTable();

const sale2 = new Sale ('Pionner Square', '3', '24', '1.6', 'pioneer square');
sale2.getRandomCookies();
sale2.cookiesPerday();
sale2.createCookiesTable();


const sale3 = new Sale ('Powell\'s', '11', '38', '3.7', 'powell\'s');
sale3.getRandomCookies();
sale3.cookiesPerday();
sale3.createCookiesTable();


const sale4 = new Sale ('St. John\'s', '20', '38', '2.3', 'st. john\'s');
sale4.getRandomCookies();
sale4.cookiesPerday();
sale4.createCookiesTable();


const sale5 = new Sale ('Waterfront', '2', '16', '4.6', 'waterfront');
sale5.getRandomCookies();
sale5.cookiesPerday();
sale5.createCookiesTable();