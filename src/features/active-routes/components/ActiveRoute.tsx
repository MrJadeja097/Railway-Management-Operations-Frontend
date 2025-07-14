import React, { useEffect, useState } from "react";

export const ActiveRoute = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`http://127.0.0.1:7000/routes`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <h1>All Active Routes</h1>
      <div>{JSON.stringify(data)}</div>
    </>
  );
};
