"use client";
import React from "react";

const AddToCart = ({ productId }: { productId: number }) => {
  return (
    <div>
      <button
        onClick={() => alert(`Added product ${productId} to cart`)}
        className="btn btn-primary"
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
