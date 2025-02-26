import React from 'react'

function page({params}) {
  return (
    <>
      <h1>Grocery Item {params.id} Review {params.reviewId}</h1>
    </>
  )
}

export default page
