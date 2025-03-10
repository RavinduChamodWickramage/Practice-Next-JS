"use client"; // Ensures this component runs on the client side in a Next.js app

import React, { useEffect, useState } from "react";
import AddToCart from "./AddToCart";

// Define an interface for the product structure
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard = () => {
  // State to store the list of products
  const [products, setProducts] = useState<Product[]>([]);

  // State to manage loading state while fetching data
  const [loading, setLoading] = useState(true);

  // State to store any error messages in case of failure
  const [error, setError] = useState<string | null>(null);

  // useEffect runs when the component mounts to fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch product data from an external API
        const response = await fetch(`https://fakestoreapi.com/products`);

        // Check if response is not OK and throw an error
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        // Parse the JSON response
        const data = await response.json();

        // Update the state with fetched products
        setProducts(data);
      } catch (error) {
        // Handle any errors that occur during the fetch
        setError(error.message);
      } finally {
        // Set loading to false once the fetch operation completes
        setLoading(false);
      }
    };

    fetchProducts(); // Call the function to fetch products
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Display a loading message while fetching data
  if (loading) return <p>Loading...</p>;

  // Display an error message if an error occurs
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {/* Map through the products array and display each product */}
      {products.map((product) => (
        <div key={product.id} className="card bg-base-100 shadow-sm">
          <figure>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>{product.description}</p>
            <p className="font-bold">Price: ${product.price}</p>
            <div className="card-actions justify-end">
              {/* Render the AddToCart component and pass productId as a prop */}
              <AddToCart productId={product.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
