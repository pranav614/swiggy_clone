import RestaurantCards from "./RestaurantCard"
import { Open } from "./RestaurantCard";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {restaurantList1} from "../utils/restaurantList"

const Body=()=>{
    const [copyRestaurantList,updatingCopy]=useState(restaurantList1);
    const IfOpen=Open(RestaurantCards);
    const myvalue=useRef();

if(!restaurantList1|| restaurantList1.length == 0){
    return <div className="loading-container"><div className="spinner "></div></div>
}

    return (
        <div>
            
            <div className="components">
                
            <button className="top-rated-res" onClick={()=>{
                let filteredData=restaurantList1.filter((resCard)=>{
                    return resCard.info.avgRating > 4;
                });
                updatingCopy(filteredData);
            }}>Top Rated Restaurants</button>

            <div>
                <div className="search-container">
                <input type="text"placeholder="search" ref={myvalue}  />
            <button className="search-button" onClick={()=>{
                const updatedSearchFilter=restaurantList1.filter((rest)=>{
                    return rest.info.name.toLowerCase().includes(myvalue.current.value.toLowerCase())
                })
                updatingCopy(updatedSearchFilter);
            }}>search</button>
                </div>
            
            </div>
            
            </div>


            <div className="cusines-restaurant">
            </div>
            <h1 style={{textAlign:'center',margin:'10px 0px 0px 0px',fontFamily:'poppins'}}>Restaurants Near Me</h1>
           <div className='my'>
          {
            copyRestaurantList.map(res => <Link style={{textDecoration:'none'}} to={"/menu/"+ res.info.id} key={res.info.id}>
                 {
                 res.info.isOpen?(<RestaurantCards ArrayData={res}/>):(<IfOpen  ArrayData={res} />)}
                 </Link>)
          }
            </div>    
        </div>
        
    )
}
export default Body;