import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './Menu';
import Dropdown from './Dropdown';
import '../App.css';

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');

    const getSortedMenuItems = (menuItems, order) => {
        return [...menuItems].sort((a, b) => {
            return order === 'asc' ? a.price - b.price : b.price - a.price;
        });
    };

    useEffect(() => {
        axios.get('http://localhost:5001/restaurants')
            .then(response => {
                setRestaurants(response.data);
            })
            .catch(error => {
                console.error('Error fetching restaurants:', error);
            });
    }, []);

    const handleRestaurantClick = (restaurantId) => {
        if (selectedRestaurant && selectedRestaurant.id === restaurantId) {
            setSelectedRestaurant(null);
        } else {
            const restaurant = restaurants.find(r => r.id === restaurantId);
            setSelectedRestaurant(restaurant);
        }
    };
    const sortedMenu = selectedRestaurant
        ? getSortedMenuItems(selectedRestaurant.menu, sortOrder)
        : [];

    return (
        <>
            <header className="head">
                <h1><span className="calpoly">CalPoly Pomona</span> | Restaurants</h1>
            </header>
            <div className="container mt-4">
                <h2>Restaurants</h2>
                {selectedRestaurant && (
                    <Dropdown
                        label="Sort By Price"
                        options={[
                            { label: 'Price Low to High', value: 'asc' },
                            { label: 'Price High to Low', value: 'desc' }
                        ]}
                        selectedValue={sortOrder}
                        onSelect={value => {
                            setSortOrder(value);
                            setSelectedRestaurant({
                                ...selectedRestaurant,
                                menu: getSortedMenuItems(selectedRestaurant.menu, value),
                            });
                        }}
                        id="price-sort-dropdown"
                    />
                )}
                <ul className="list-group">
                    {restaurants.map((restaurant) => (
                        <li
                            key={restaurant._id}
                            className="list-group-item list-group-item-action"
                            onClick={() => handleRestaurantClick(restaurant.id)}
                        >
                            {restaurant.name}
                        </li>
                    ))}
                </ul>
                {selectedRestaurant && <Menu restaurant={{ ...selectedRestaurant, menu: sortedMenu }} />}
            </div>
        </>
    );
}

export default RestaurantList;