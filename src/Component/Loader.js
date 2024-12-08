import React, { useEffect, useState } from "react";
import PaginationComponent from "./PaginationComponent";

export default function Loader() {
  const [Loading, setLoading] = useState(true);
  const [datas, setdatas] = useState([]);
  const [search, setsearch] = useState("");
  const [sort, setsort] = useState("");
  const [category, setcategory] = useState("");
  const [Loader_data , set_Loader_data] = useState([]);
  const [allData , set_allData] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
        v.category.toLowerCase().includes(search.toLowerCase()) 
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

  const totalPages = Math.ceil(Final_Data.length / itemsPerPage);
  
  const handle_Next = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handle_Previous = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const paginatedData = Final_Data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setTimeout(() => {
      //  setLoading(false);
    },2000);
    // setLoading(false);  
    GetData();
  }, []);

  console.log("uniquearr", category);
  console.log(Final_Data);

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

        <button style={category === '' ? {backgroundColor : "#90ee90"} : null} className="cat_btn" onClick={() => {setcategory("")}}>All</button>

        {Loader_data.map((v) => (
          <button style={ v === category ? {backgroundColor : "#90ee90" }: null}
            className="cat_btn"
            onClick={() => {
              setcategory(v);
            }}
          >
            {v}
          </button>
        ))}
      </div>

      {Loading ? (
       <main id="loaderrr">
       <svg class="ip" viewBox="0 0 256 128" width="256px" height="128px" xmlns="http://www.w3.org/2000/svg">
         <defs>
           <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
             <stop offset="0%" stop-color="#5ebd3e" />
             <stop offset="33%" stop-color="#ffb900" />
             <stop offset="67%" stop-color="#f78200" />
             <stop offset="100%" stop-color="#e23838" />
           </linearGradient>
           <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
             <stop offset="0%" stop-color="#e23838" />
             <stop offset="33%" stop-color="#973999" />
             <stop offset="67%" stop-color="#009cdf" />
             <stop offset="100%" stop-color="#5ebd3e" />
           </linearGradient>
         </defs>
         <g fill="none" stroke-linecap="round" stroke-width="16">
           <g class="ip__track" stroke="#ddd">
             <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"/>
             <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"/>
           </g>
           <g stroke-dasharray="180 656">
             <path class="ip__worm1" stroke="url(#grad1)" stroke-dashoffset="0" d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"/>
             <path class="ip__worm2" stroke="url(#grad2)" stroke-dashoffset="358" d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"/>
           </g>
         </g>
       </svg>
     </main>
      ) : (
        <div className="row">
          {paginatedData.map((v, i) => (
            <div className="col-4"> 
              <img id="loader_img" src={v.image} width="170px" height="190px" alt="Product" />
              <h2>{v.title}</h2>
              <h2>{v.price}</h2>
              <h3>{v.category}</h3>
              {/* <button id="cart">Add to Cart</button> */}
            </div>
          ))}
        </div>
      )}
      <div id="n_btn">
      <button id="Nav_btn1" onClick={handle_Previous} disabled={currentPage === 1} >Previous</button>
      <button id="btn_1">1</button>
      <button id="btn_2">2</button>
      <button id="btn_3">3</button>
      <button id="btn_4">4</button>
      <button id="Nav_btn2"onClick={handle_Next}  disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );  
  }

