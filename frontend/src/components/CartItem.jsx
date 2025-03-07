const CartItem = ({ item, removeFromCart }) => {
    return (
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-4">
          <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
          <div>
            <h3 className="font-semibold">{item.title}</h3>
            <p>${item.price} x {item.quantity}</p>
          </div>
        </div>
        <button onClick={() => removeFromCart(item.id)} className="text-red-600">❌</button>
      </div>
    );
  };
  
export default CartItem;
  