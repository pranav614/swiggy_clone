import { useEffect,useState } from "react"
import { subMenu } from "./constants";

const useRestaurantSubMenu=(resId)=>{
    const[itemMenu,updatedMenu]=useState(null)

    useEffect(()=>{
        fetchedFunc();
    },[])
    const fetchedFunc=async()=>{
        const toFetch=await fetch(subMenu+resId);
        const response=await toFetch.json();
        updatedMenu(response);
        
    };
    return itemMenu;
}
export default useRestaurantSubMenu;