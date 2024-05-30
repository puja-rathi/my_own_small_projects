//create react components for displaying and managing cars
import React, { useEffect, useState } from 'react';
import { getCars } from '../services/carService';

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getCars();
            setCars(result);
        };
        fetchData();
    }, []);

    //return all cars
    return (
        <div>
            <h1>Car Inventory</h1>
            <ul>
                {cars.map(car => (
                    <li key={car._id}>
                        {car.make} {car.model} ({car.registrationNumber}) - {car.owner}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarList;