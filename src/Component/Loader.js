import React, { useEffect, useState } from "react";

export default function Loader() {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        const response = fetch("https://fakestoreapi.com/products")
      setLoading(false);
    }, 3000);
  }, []);

  return <div>
    {Loading ? <div class="loader"></div> : <p>Hello</p>}
    </div>;
}
