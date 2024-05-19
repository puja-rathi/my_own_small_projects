// src/components/TotalPrice.js
const TotalPrice = ({ totalPrice }) => {
    return (
        <div style={{ position: 'absolute', top: 20, right: 20, display: totalPrice > 0 ? 'block' : 'none' }} className="total-price">
            <h2>Total Price: £{totalPrice.toFixed(2)}</h2>
        </div>
    );
};

export default TotalPrice;
