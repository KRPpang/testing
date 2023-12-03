require('dotenv').config();
const mongoose = require('mongoose');
const Restaurant = require('./models/restaurants.js');

const data = [
    {
        id: 1, name: 'Panda Express', menu: [
            { id: 101, name: 'Bowl', price: 8.40 },
            { id: 102, name: 'Plate', price: 9.90 },
            { id: 103, name: 'Bigger Plate', price: 11.40 },
            { id: 104, name: 'Family Meal', price: 43.00 },

            { id: 105, name: '(Entree) A la Carte s', price: 5.20 },
            { id: 106, name: '(Entree) A la Carte m', price: 8.50 },
            { id: 107, name: '(Entree) A la Carte l', price: 11.20 },

            { id: 108, name: '(Premium E) A la Carte s', price: 6.49 },
            { id: 109, name: '(Premium E) A la Carte m', price: 11.00 },
            { id: 110, name: '(Premium E) A la Carte l', price: 14.49 },
            { id: 111, name: '(Premium E) A la Carte l', price: 14.49 },

            { id: 112, name: '(Sides) A la Carte m', price: 4.40 },
            { id: 113, name: '(Sides) A la Carte l', price: 5.40 },

            { id: 114, name: 'Chicken Egg Roll', price: 2.00 },
            { id: 115, name: 'Veggie Spring Roll', price: 2.00 },
            { id: 116, name: 'Cream Cheese Rangoons', price: 2.00 },
            { id: 117, name: 'Apple Pie Roll', price: 2.00 },

        ]
    },

    {
        id: 2, name: 'Carls jr', menu: [
            /*Burgers*/
            { id: 201, name: 'Famous Star', price: 5.79 },
            { id: 202, name: 'Super Star', price: 7.79 },
            { id: 203, name: 'Western Bacon', price: 6.79 },
            { id: 204, name: 'Double Western Bacon', price: 7.99 },
            { id: 205, name: 'California Classic', price: 3.49 },
            { id: 206, name: 'The Big Carl', price: 7.99 },
            { id: 207, name: 'Original', price: 8.59 },
            /*third lb burgers*/
            { id: 207, name: 'Original double', price: 9.59 },
            { id: 208, name: 'Guacamole Bacon', price: 8.99 },
            { id: 208, name: 'Guacamole Bacon double', price: 9.99 },
            { id: 209, name: 'Jalapeno', price: 8.89 },
            { id: 209, name: 'Jalapeno double', price: 9.99 },
            /*hand breaded chicken*/
            { id: 210, name: 'Hand-Breaded Chicken', price: 7.99 },
            { id: 211, name: 'Hand-Breaded Bacon swiss Chicken', price: 8.89 },
            { id: 212, name: 'Hand Breaded Chicken Tenders 3', price: 6.99 },
            { id: 213, name: 'Hand Breaded Chicken Tenders 5', price: 8.89 },
            /*charbroiled chicken*/
            { id: 214, name: 'Charbroiled Chicken Club', price: 8.99 },
            { id: 215, name: 'Charbroiled Santa Fe Chicken', price: 8.89 },
            { id: 216, name: 'Charbroiled BBQ Chicken', price: 7.29 },
            /*value menu*/
            { id: 217, name: 'Japaleno Double Cheeseburger', price: 3.59 },
            { id: 218, name: 'Double Cheeseburger', price: 3.39 },
            { id: 219, name: 'Big Hamburger', price: 4.99 },
            { id: 220, name: 'Chicken Stars 6', price: 4.89 },
            { id: 221, name: 'Spicy Chicken', price: 4.99 },
            /*sides*/
            { id: 222, name: 'Drink s', price: 2.89 },
            { id: 223, name: 'Drink m', price: 3.19 },
            { id: 224, name: 'Drink l', price: 3.49 },
            { id: 225, name: 'Milk', price: 2.89 },
            { id: 226, name: 'Chocolate Milk', price: 2.89 },
            { id: 227, name: 'Lemonade Strawberry', price: 3.19 },
            { id: 228, name: 'Lemonade', price: 2.99 },
            /*Combos*/
            { id: 201, name: 'Famous Star C', price: 10.58 },
            { id: 202, name: 'Super Star C', price: 12.69 },
            { id: 203, name: 'Western Bacon C', price: 11.99 },
            { id: 204, name: 'Double Western Bacon C', price: 13.09 },
            { id: 205, name: 'California Classic C', price: 6.99 },
            { id: 206, name: 'The Big Carl C', price: 13.49 },
            { id: 207, name: 'Original C', price: 13.59 },
            { id: 207, name: 'Original double C', price: 14.29 },
            { id: 208, name: 'Guacamole Bacon C', price: 13.99 },
            { id: 208, name: 'Guacamole Bacon double C', price: 14.69 },
            { id: 209, name: 'Jalapeno C', price: 13.49 },
            { id: 209, name: 'Jalapeno double C', price: 14.59 },
            { id: 210, name: 'Hand-Breaded Chicken C', price: 12.99 },
            { id: 211, name: 'Hand-Breaded Bacon swiss Chicken C', price: 13.89 },
            { id: 212, name: 'Hand Breaded Chicken Tenders 3 C', price: 8.89 },
            { id: 213, name: 'Hand Breaded Chicken Tenders 5 C', price: 12.99 },
            { id: 214, name: 'Charbroiled Chicken Club C', price: 13.99 },
            { id: 215, name: 'Charbroiled Santa Fe Chicken C', price: 13.89 },
            { id: 216, name: 'Charbroiled BBQ Chicken C', price: 12.49 },

        ]
    },

    {
        id: 3, name: 'Subway', menu: [
            /*cheeesesteak subs*/
            { id: 301, name: 'The Philly', price: 10.99 },
            { id: 302, name: 'The Philly (6)', price: 6.99 },
            { id: 303, name: 'Teriyaki Blitz', price: 11.29 },
            { id: 304, name: 'Teriyaki Blitz (6)', price: 6.99 },
            { id: 305, name: 'The Outlaw', price: 10.99 },
            { id: 306, name: 'The Outlaw (6)', price: 6.99 },
            { id: 307, name: 'The Monster', price: 12.49 },
            { id: 308, name: 'The Monster (6)', price: 7.99 },
            { id: 309, name: 'The Monster', price: 12.49 },
            /*chicken subs*/
            { id: 310, name: 'All-Pro weet Onion Teriyaki', price: 12.79 },
            { id: 311, name: 'All-Pro weet Onion Teriyaki (6)', price: 6.99 },
            { id: 312, name: 'Elite Chicken & Bacon Ranch', price: 11.79 },
            { id: 313, name: 'Elite Chicken & Bacon Ranch (6)', price: 7.39 },
            { id: 314, name: 'The Great Garlic', price: 11.79 },
            { id: 315, name: 'The Great Garlic (6)', price: 7.29 },
            { id: 316, name: 'The Mexicali', price: 12.79 },
            { id: 317, name: 'The Mexicali (6)', price: 7.79 },
            /*Italiano subs*/
            { id: 318, name: 'HotShot Italiano', price: 9.99 },
            { id: 319, name: 'HotShot Italiano (6)', price: 6.29 },
            { id: 320, name: 'Ultimate BMT', price: 10.99 },
            { id: 321, name: 'Ultimate BMT (6)', price: 7.29 },
            { id: 322, name: 'Supreme Meats', price: 12.99 },
            { id: 323, name: 'Supreme Meats (6)', price: 7.69 },
            { id: 324, name: 'The Boss', price: 10.59 },
            { id: 325, name: 'The Boss (6)', price: 6.59 },
            /*Club subs*/
            { id: 326, name: 'Pickleball Club', price: 10.99 },
            { id: 327, name: 'Pickleball Club (6)', price: 6.79 },
            { id: 328, name: 'All-American Club', price: 12.49 },
            { id: 329, name: 'All-American Club (6)', price: 7.59 },
            { id: 330, name: 'Subway Club', price: 11.59 },
            { id: 331, name: 'Subway Club (6)', price: 7.29 },
            /*Custom subs*/
            { id: 333, name: 'Turkey Sub', price: 10.99 },
            { id: 334, name: 'Turkey Sub (6)', price: 6.99 },
            { id: 335, name: 'Tuna Sub', price: 10.49 },
            { id: 336, name: 'Tuna Sub (6)', price: 6.59 },
            { id: 337, name: 'Black Forest Ham Sub', price: 9.99 },
            { id: 338, name: 'Black Forest Ham Sub (6)', price: 6.29 },
            { id: 339, name: 'Steak Sub', price: 10.99 },
            { id: 340, name: 'Steak Sub (6)', price: 6.99 },
            { id: 341, name: 'Meatball Marinara Sub', price: 8.99 },
            { id: 342, name: 'Meatball Marinara Sub (6)', price: 5.99 },
            { id: 343, name: 'Cold Cut Combo Sub', price: 8.99 },
            { id: 344, name: 'Cold Cut Combo Sub (6)', price: 5.99 },
            { id: 345, name: 'Rotierie Style Chicken Sub', price: 10.59 },
            { id: 346, name: 'Rotierie Style Chicken Sub (6)', price: 6.59 },
            { id: 347, name: 'Veggie Delite Sub', price: 8.29 },
            { id: 348, name: 'Veggie Delite Sub (6)', price: 5.99 },
            { id: 349, name: 'Grilled Chicken Sub', price: 10.59 },
            { id: 350, name: 'Grilled Chicken Sub (6)', price: 6.29 },
            { id: 351, name: 'Roast Beef Sub', price: 11.59 },
            { id: 352, name: 'Roast Beef Sub (6)', price: 6.59 },
            { id: 352, name: 'Buffalo Chicken Sub', price: 10.99 },
            { id: 353, name: 'Buffalo Chicken Sub (6)', price: 6.49 },
            /*Side*/
            { id: 354, name: 'Drink s', price: 2.29 },
            { id: 355, name: 'Drink m', price: 2.49 },
            { id: 356, name: 'Drink l', price: 2.69 },
            { id: 357, name: 'Chip', price: 1.39 },
        ]
    },

    {
        id: 4, name: 'Hibachi San', menu: [
            { id: 401, name: 'Poke bowl S', price: 10.50 },
            { id: 402, name: 'Poke bowl M', price: 12.00 },
            { id: 403, name: 'Poke bowl L', price: 13.50 },
            { id: 404, name: 'Musubi', price: 4.50 },
            /*xtra protein*/
            { id: 405, name: '(xtra)Poke bowl S', price: 12.50 },
            { id: 406, name: '(xtra)Poke bowl M', price: 14.00 },
            { id: 407, name: '(xtra)Poke bowl L', price: 15.50 },
            { id: 408, name: 'extra protein', price: 2.00 },


        ]
    },

    {
        id: 5, name: 'Saddles Cafe & other Caffe', menu: [
            /*Brewed coffee, teas */
            { id: 501, name: 'Coffee Of the Day S', price: 2.65 },
            { id: 502, name: 'Coffee Of the Day M', price: 2.95 },
            { id: 503, name: 'Coffee Of the Day L', price: 3.25 },
            { id: 504, name: 'Chai Latte S', price: 4.45 },
            { id: 505, name: 'Chai Latte M', price: 4.95 },
            { id: 506, name: 'Chai Latte L', price: 5.25 },
            { id: 507, name: 'Hot Tea S', price: 2.95 },
            { id: 508, name: 'Hot Tea M', price: 3.25 },
            { id: 509, name: 'Hot Tea L', price: 3.45 },
            { id: 510, name: 'Hot Chocolate S', price: 3.25 },
            { id: 511, name: 'Hot Chocolate M', price: 3.75 },
            { id: 512, name: 'Hot Chocolate L', price: 3.95 },
            { id: 513, name: 'White Hot Chocolate S', price: 4.05 },
            { id: 514, name: 'White Hot Chocolate M', price: 4.55 },
            { id: 515, name: 'White Hot Chocolate L', price: 4.75 },
            { id: 516, name: 'Milk Steamer S', price: 2.45 },
            { id: 517, name: 'Milk Steamer M', price: 2.65 },
            { id: 518, name: 'Milk Steamer L', price: 2.95 },
            { id: 519, name: 'Matcha Tea Latte S', price: 4.45 },
            { id: 520, name: 'Matcha Tea Latte M', price: 4.95 },
            { id: 521, name: 'Matcha Tea Latte L', price: 5.25 },
            /*iced coffe and iced tea*/
            { id: 522, name: 'Iced Coffee S', price: 3.45 },
            { id: 522, name: 'Iced Coffee M', price: 3.75 },
            { id: 522, name: 'Iced Coffee L', price: 4.25 },
            { id: 523, name: 'Cold Brew S', price: 3.95 },
            { id: 523, name: 'Cold Brew M', price: 4.45 },
            { id: 523, name: 'Cold Brew L', price: 4.75 },
            { id: 524, name: 'Vanilla Sweet Cream Cold Brew S', price: 4.45 },
            { id: 524, name: 'Vanilla Sweet Cream Cold Brew M', price: 4.95 },
            { id: 524, name: 'Vanilla Sweet Cream Cold Brew L', price: 5.25 },
            { id: 525, name: 'Ice Chai Latte S', price: 4.45 },
            { id: 525, name: 'Ice Chai Latte M', price: 4.95 },
            { id: 525, name: 'Ice Chai Latte L', price: 5.25 },
            { id: 526, name: 'Iced Shaken Espreso S', price: 3.75 },
            { id: 526, name: 'Iced Shaken Espreso M', price: 4.25 },
            { id: 526, name: 'Iced Shaken Espreso L', price: 4.75 },
            { id: 527, name: 'Strawberry Acai Refresher S', price: 3.95 },
            { id: 527, name: 'Strawberry Acai Refresher M', price: 4.45 },
            { id: 527, name: 'Strawberry Acai Refresher L', price: 4.95 },
            { id: 528, name: 'Mango Dragonfruit Lemonade S', price: 4.65 },
            { id: 528, name: 'Mango Dragonfruit Lemonade M', price: 4.95 },
            { id: 528, name: 'Mango Dragonfruit Lemonade L', price: 5.65 },
            { id: 529, name: 'Iced Tea S', price: 2.95 },
            { id: 529, name: 'Iced Tea M', price: 3.45 },
            { id: 529, name: 'Iced Tea L', price: 3.75 },
            { id: 530, name: 'Iced Tea Lemonade S', price: 3.15 },
            { id: 530, name: 'Iced Tea Lemonade M', price: 3.65 },
            { id: 530, name: 'Iced Tea Lemonade L', price: 3.95 },
            /*frappuccino*/
            { id: 531, name: 'Coffee Frappe S', price: 4.45 },
            { id: 531, name: 'Coffee Frappe M', price: 4.95 },
            { id: 531, name: 'Coffee Frappe L', price: 5.45 },
            { id: 532, name: 'Caramel Frappe S', price: 4.75 },
            { id: 532, name: 'Caramel Frappe M', price: 5.25 },
            { id: 532, name: 'Caramel Frappe L', price: 5.75 },
            { id: 533, name: 'Mocha Frappe S', price: 4.75 },
            { id: 533, name: 'Mocha Frappe M', price: 5.25 },
            { id: 533, name: 'Mocha Frappe L', price: 5.75 },
            { id: 534, name: 'White Chocolate Mocha Frappe S', price: 4.75 },
            { id: 534, name: 'White Chocolate Mocha Frappe M', price: 5.25 },
            { id: 534, name: 'White Chocolate Mocha Frappe L', price: 5.75 },
            { id: 535, name: 'Java Chip Frappe S', price: 4.45 },
            { id: 535, name: 'Java Chip Frappe M', price: 4.95 },
            { id: 535, name: 'Java Chip Frappe L', price: 5.45 },
            { id: 536, name: 'Vanilla Bean Creme Frappe S', price: 4.75 },
            { id: 536, name: 'Vanilla Bean Creme Frappe M', price: 5.25 },
            { id: 536, name: 'Vanilla Bean Creme Frappe L', price: 5.75 },
            { id: 537, name: 'Double Chocolate Chip Frappe S', price: 4.45 },
            { id: 537, name: 'Double Chocolate Chip Frappe M', price: 4.95 },
            { id: 537, name: 'Double Chocolate Chip Frappe L', price: 5.45 },
            { id: 538, name: 'white Chocolate Creme Frappe S', price: 4.75 },
            { id: 538, name: 'white Chocolate Creme Frappe M', price: 5.25 },
            { id: 538, name: 'white Chocolate Creme Frappe L', price: 5.75 },
            { id: 539, name: 'Matcha Creme Frappe S', price: 4.75 },
            { id: 540, name: 'Matcha Creme Frappe M', price: 5.25 },
            { id: 541, name: 'Matcha Creme Frappe L', price: 5.75 },
            /*espresso*/
            { id: 542, name: 'Caffe Latte S', price: 3.95 },
            { id: 543, name: 'Caffe Latte M', price: 4.45 },
            { id: 544, name: 'Caffe Latte L', price: 5.25 },
            { id: 545, name: 'Cappuccino S', price: 3.95 },
            { id: 546, name: 'Cappuccino M', price: 4.45 },
            { id: 547, name: 'Cappuccino L', price: 4.95 },
            { id: 548, name: 'Caffe Mocha S', price: 4.45 },
            { id: 549, name: 'Caffe Mocha M', price: 4.95 },
            { id: 550, name: 'Caffe Mocha L', price: 5.25 },
            { id: 551, name: 'Vanilla Latte S', price: 4.75 },
            { id: 552, name: 'Vanilla Latte M', price: 5.25 },
            { id: 553, name: 'Vanilla Latte L', price: 5.75 },
            { id: 554, name: 'Caramel Macchiato S', price: 4.75 },
            { id: 555, name: 'Caramel Macchiato M', price: 4.95 },
            { id: 556, name: 'Caramel Macchiato L', price: 5.25 },
            { id: 557, name: 'White Chocolate Mocha S', price: 4.95 },
            { id: 558, name: 'White Chocolate Mocha M', price: 5.45 },
            { id: 559, name: 'White Chocolate Mocha L', price: 5.95 },
            { id: 560, name: 'Caffe Americano S', price: 3.15 },
            { id: 561, name: 'Caffe Americano M', price: 3.75 },
            { id: 562, name: 'Caffe Americano L', price: 3.95 },
            { id: 563, name: 'Espresso single', price: 2.75 },
            { id: 564, name: 'Espresso double', price: 2.95 },
            { id: 565, name: 'Espresso tripe', price: 3.15 },
            { id: 566, name: 'Espresso Macchiato single', price: 2.85 },
            { id: 567, name: 'Espresso Macchiato double', price: 3.05 },
            { id: 568, name: 'Espresso Macchiato triple', price: 3.25 },
            { id: 569, name: 'Espresso Con Panna single', price: 3.05 },
            { id: 570, name: 'Espresso Con Panna double', price: 3.25 },
            { id: 571, name: 'Espresso Con Panna triple', price: 3.85 },
            /*pastries*/
            { id: 572, name: 'Bacon Egg & Cheese French Toast', price: 4.99 },
            { id: 573, name: 'Bacon Egg & Cheese Ciabatta', price: 4.99 },
            { id: 574, name: 'Sausage Egg & Cheese Ciabatta', price: 4.99 },
            { id: 575, name: 'Almond Croissant', price: 3.99 },
            { id: 576, name: 'Ham & Cheese Croissant', price: 4.29 },
            { id: 577, name: 'Butter Croissant', price: 2.99 },
            { id: 578, name: 'Chocolate Croissant', price: 3.49 },
            { id: 579, name: 'Blueberry Streusel Muffin', price: 3.49 },
            { id: 580, name: 'Banana Nut Muffin', price: 3.49 },
            { id: 581, name: 'Chocolate Muffin', price: 3.49 },
            { id: 582, name: 'Chocolate Chip Muffin', price: 3.49 },
            { id: 583, name: 'Orange Cranberry Muffin', price: 3.49 },
            { id: 584, name: 'Lemon Poppyseed Muffin', price: 3.49 },
            { id: 585, name: 'Apricot Danish', price: 3.59 },
            { id: 586, name: 'Cheese Danish', price: 3.59 },
            { id: 587, name: 'Raspberry Danish', price: 3.59 },
            { id: 588, name: 'Kouign Amann-Blueberry', price: 3.29 },
            { id: 589, name: 'Plain Bagel', price: 2.49 },
            { id: 590, name: 'Jalapeno Cheese Bagel', price: 2.49 },
            { id: 591, name: 'Everything Bagel', price: 2.49 },
            { id: 592, name: 'Sesame Bagel', price: 2.49 },
            { id: 593, name: 'Cream Cheese', price: 0.75 },
            { id: 594, name: 'Chocolate Brownie', price: 2.99 },
            { id: 595, name: 'Chocolate Chip Cookie', price: 2.49 },
            /*adds*/
            { id: 596, name: 'Espresso Shot add', price: 1.00 },
            { id: 597, name: 'Syrup Flavor', price: 0.50 },
            { id: 598, name: 'Alternate Milk', price: 0.60 },


        ]
    },

    {
        id: 6, name: 'Salad place', menu: [
            { id: 601, name: 'Ceasars Place', price: 9.59 },
            { id: 602, name: 'Grecian', price: 10.99 },
            { id: 603, name: 'Poke Bowl', price: 12.99 },
            { id: 604, name: 'Sprouted Rice', price: 8.99 },
            { id: 605, name: 'Green Tea Soba Noodle', price: 8.99 },
            { id: 606, name: 'Elote Ensalada', price: 11.99 },

        ]
    },

    {
        id: 7, name: 'Qdoba', menu: [
            { id: 701, name: 'Veggie', price: 9.75 },
            { id: 702, name: 'Grilled Adobo Chicken', price: 10.45 },
            { id: 703, name: 'Ground Beef', price: 10.45 },
            { id: 704, name: 'Cholula Hot & Sweet Chicken', price: 10.95 },
            { id: 705, name: 'Pulled Pork', price: 10.95 },
            { id: 706, name: 'Grilled Steak', price: 11.75 },
            { id: 707, name: 'Brisket Birria', price: 11.95 },
            { id: 708, name: 'Extra Protein', price: 3.25 },

        ]
    }
];

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
    console.log("Connected to MongoDB");
    // Insert data into the Restaurant collection
    try {
        const result = await Restaurant.create(data);
        console.log("Data inserted: ", result);
    } catch (error) {
        console.error(error);
    } finally {
        db.close(); // Close the connection after insertion
    }
});