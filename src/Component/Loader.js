import React, { useEffect, useState } from "react";

export default function Loader() {
  const [Loading, setLoading] = useState(true);
  const [datas, setdatas] = useState([]);
  const [search, setsearch] = useState("");
  const [sort, setsort] = useState("");
  const [category, setcategory] = useState("");
  const [Loader_data , set_Loader_data] = useState([]);
  const [allData , set_allData] = useState('')
  const [bgColor, setBgColor] = useState("white");  

  const GetData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    let uniquearr = [];

     data.map((v) => {
      if (!uniquearr.includes(v.category)) {  
        uniquearr.push(v.category);
      }
      set_Loader_data(uniquearr)
    });

    setdatas(data);
    setLoading(false);
  };

  // console.log(datas);

  const HandleFiltering = () => {
    console.log(search);
    let Fdata = [];

    const F_data = datas.filter(
      (v, i) =>
        v.title.toLowerCase().includes(search.toLowerCase()) ||
        v.price.toString().includes(search.toString()) ||
        v.category.toLowerCase().includes(search.toLowerCase()) ||
        v.description.toLowerCase().includes(search.toLowerCase())
    );

    if (sort === "l_h") {
      F_data.sort((a, b) => a.price - b.price);
    } else if (sort === "h_l") {
      F_data.sort((a, b) => b.price - a.price);
    } else if (sort === "a_z") {
      F_data.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "z_a") {
      F_data.sort((a, b) => b.title.localeCompare(a.title));
    }

    if (category) {
      return F_data.filter((v) => v.category === category);
    }
    return F_data;
  };

  console.log();

  const Final_Data = HandleFiltering();
  console.log(Final_Data);

  useEffect(() => {
    // setTimeout(() => {
    // }, 3000);
    setLoading(false);
    GetData();
  }, []);

  console.log("uniquearr", category);

   const toggleBackground = () => {
    if (bgColor === 'white') setBgColor('black');
      if (bgColor === 'black') setBgColor('white');
   }

  return (
    
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          name="search"
          id="Input"
          placeholder="Search here..."
          onChange={(e) => setsearch(e.target.value)}
        />
        <select id="selection" onChange={(e) => setsort(e.target.value)}>
          <option value="0">---Select---</option>
          <option value="l_h">Lower to High</option>
          <option value="h_l">High to Lower</option>
          <option value="a_z">a to z</option>
          <option value="z_a">z to a</option>
        </select>

        <button  className="cat_btn" onClick={() => {setcategory("")}}>All</button>

        {Loader_data.map((v) => (
          <button
            className="cat_btn"
            onClick={() => {
              setcategory(v);
              toggleBackground()
            }}
          >
            {v}
          </button>
        ))}
      </div>

      {Loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="row">
          {Final_Data.map((v, i) => (
            <div className="col-4">
              <h2>{v.title}</h2>
              <img src={v.image} width="150px" height="170px" alt="Product" />
              <h2>{v.price}</h2>
              <h3>{v.category}</h3>
              <p>{v.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
