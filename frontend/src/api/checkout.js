import axios from "axios";

const API_URL = "http://localhost:5000/api/checkout"; // Backend checkout route

// Initiate checkout session
export const createCheckoutSession = async (cartItems) => {
  try {
    const response = await axios.post(`${API_URL}/create-session`, { cartItems });
    return response.data; // Returns session ID
  } catch (error) {
    console.error("Checkout session creation failed:", error.response?.data || error.message);
    throw error;
  }
};
