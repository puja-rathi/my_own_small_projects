import axios from 'axios';

const API_URL = 'http://localhost:8000/api/cars';

//get Cars list using axios and API
const getCars = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

const addCar = async (car) => {
    const response = await axios.post(API_URL, car);
    return response.data;
};

const updateCar = async (id, car) => {
    const response = await axios.put(`${API_URL}/${id}`, car);
    return response.data;
};

const updateMultipleCars = async (updates) => {
    const response = await axios.put(API_URL, updates);
    return response.data;
};

const deleteCar = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};

const getCarsOlderThan5Years = async () => {
    const response = await axios.get(`${API_URL}/older-than-5-years`);
    return response.data;
};

export { getCars, addCar, updateCar, updateMultipleCars, deleteCar, getCarsOlderThan5Years };
