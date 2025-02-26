import Link from "next/link";
import React from "react";

async function page({ params }) {
  const reviews = [
    {
      id: 1,
      text: "This is a review",
    },
    {
      id: 2,
      text: "This is another review",
    },
  ];

  return (
    <>
      <div>
        <h1>Grocery Item {params.id}</h1>
      </div>
      <div>
        <h2>Reviews</h2>
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <Link
                href={`/products/groceries/${params.id}/review/${review.id}`}
              >{`Review ${review.id}`}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default page;
