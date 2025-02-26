import React from 'react'

function page({params}) {
  return (
    <div>
      <h1>Meat Item {params.page}</h1>
    </div>
  )
}

export default page
