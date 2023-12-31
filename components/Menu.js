import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { subMenu } from "../utils/constants";

import MenuSubCategories from "./MenuSubCategories";


const Menu=()=>{
    const [itemMenu,updatedMenu]=useState(null)
    const {resId}=useParams()
    const [showContainer, setShowContainer] = useState(0);



    useEffect(()=>{
        fetchedMenu();
        },[])
        const fetchedMenu=async ()=>{
            const response=await fetch(subMenu+resId);
            const data1=await response.json();   
            updatedMenu(data1.data);

        }
        if (itemMenu===null){
            return <div className="loading-container"><div className="spinner "></div></div>
        }
        

  
        const name = itemMenu?.cards[0]?.card?.card?.info.name;
        const cuisines = itemMenu?.cards[0]?.card?.card?.info?.cuisines;
        const areaName = itemMenu?.cards[0]?.card?.card?.info?.areaName;
        const avgRating=itemMenu?.cards[0]?.card?.card?.info?.avgRating;
        
        const subItemsList=itemMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
        const allArrayElements=itemMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const filteredArray=allArrayElements.filter(res=>
           res?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        
        
        
        if(subItemsList == null){
            return (
                
            <div className="menuSubContainer">
              <div className="restaurant-info title-description">
                <div>
                <h4>{name }</h4>
                    <p className="c-text">{cuisines?.join(',')}</p>
                    <p className="a-text">{areaName}</p>
                </div>
                <div>
                    <div className="rating-container"><span><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="20"><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/></svg></span><p>Rating: {avgRating}</p></div>
                </div>
                </div>
                
                <h1 className="item-header-menu">Menu</h1>
              <p style={{textAlign:'center'}}>No items available.</p>
            </div>
          );
        }


    return(
        <div className="menuSubContainer">
            <div className="restaurant-info title-description">
                <div className="">
                    <h4>{name }</h4>
                    <p className="c-text">{cuisines?.join(',')}</p>
                    <p className="a-text">{areaName}</p>
                </div>
            
                <div>
                    <div className="rating-container"><span><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="20"><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/></svg></span><p>Rating:{avgRating}</p></div>
                </div>
            </div>
            <h1 className="item-header-menu">Menu</h1>
            
            {
               

                filteredArray.map((res,index)=>(
                    <MenuSubCategories key={index} categories={res}
                    showItem={index === showContainer ? true : false} 
                    setShowContainer={()=>setShowContainer(index)}
                    />
                ))
            }
            
           
        </div>
    )
}
export default Menu;