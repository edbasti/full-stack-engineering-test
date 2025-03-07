import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <Link to={`/product/${product.id}`} className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
