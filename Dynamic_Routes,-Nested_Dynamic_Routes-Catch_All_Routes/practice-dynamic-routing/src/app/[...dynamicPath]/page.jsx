import React from "react";

function page({params}) {
  return (
    <>
      <h1>Catch All Routes</h1>
      <p>{ JSON.stringify(params) }</p>

      <ul>
        {params.dynamicPath.map((item) => {
          return <li>{item}</li>
        })}
      </ul>
    </>
  );
}

export default page;
