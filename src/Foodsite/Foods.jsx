import React, { useState } from 'react';
import { foods } from './data.js';

const Foods = () => {
  let [food, setFood] = useState(foods); 
  console.log(food.cat); 
  let filterByCat = (cat) => 
  { 
    setFood(foods.filter((data) => data.cat == cat)); 
  }; 
  return ( 
    <div style={{ display: "flex", flexWrap: "wrap", width: "2000 px", margin:"auto 50px" }}> 
      <div style={{ margin:"22px 390px" }}> 
          <button type="button" class="btn btn-primary" onClick={()=>{setFood(foods);}}>All</button>
          <button type="button" class="btn btn-secondary" onClick={()=>{filterByCat("chinese");}}>Chinese</button>
          <button type="button" class="btn btn-success" onClick={()=>{filterByCat("FastFood");}}>Fast food</button>
          <button type="button" class="btn btn-danger" onClick={()=>{filterByCat("NothIndian");}}>North Indian</button>
          <button type="button" class="btn btn-warning" onClick={()=>{filterByCat("SeaFood");}}>Sea Food</button>
          <button type="button" class="btn btn-info" onClick={()=>{filterByCat("SouthIndian");}}>South Indian</button>
      </div>
        {food.map((data) => { 
          return ( 
          <> 
          <div style={{margin:"0 1px"}}>
            <div key={data.price} style={{ textAlign: "center", padding: "5px", maxWidth: "250px", fontFamily:"cooper"}}>
              <img src={data.image} alt="" style={{ margin: "10px", border: "3px solid #3d5db5", height:"258px", width:"200px", padding: "5px"}}/>
              <h4>{data.name}</h4> 
              <p>Price: {data.price}</p> 
            </div>
            </div>
          </> 
        );
      })};
    </div>
  );
};

export default Foods
