// TotalPrice component contains totalPrice as parameter from TotalPrice component in app.js
const TotalPrice = ({ totalPrice }) => {
    //return conditional div if price is > 0 then only div will be visible else none
    return (
        <div style={{ top: 20, right: 20, display: totalPrice > 0 ? 'block' : 'none' }} className="total-price">
            <h2>Total Price: £{totalPrice.toFixed(2)}</h2>
        </div>
    );
};

export default TotalPrice;
