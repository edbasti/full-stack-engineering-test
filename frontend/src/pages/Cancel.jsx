import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold text-red-600">Payment Canceled</h1>
      <p className="text-gray-700 my-4">Your payment was not completed. You can try again or continue shopping.</p>
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Return to Store
      </Link>
    </div>
  );
};

export default Cancel;
