import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Success = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold text-green-600">Payment Successful!</h1>
      <p className="text-gray-700 my-4">Thank you for your purchase. Your order has been placed successfully.</p>
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Continue Shopping
      </Link>
    </div>
  );
};

export default Success;
