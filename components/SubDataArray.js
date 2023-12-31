import React from "react";
import { subMenuImg_Url } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem} from "../utils/cartSlice";


const SubDataArray = (props) => {
  const cartArray=useSelector((store)=>store.cart.cartItems);
  const dispatch=useDispatch();
  const handlingAddItem=(item)=>{
    console.log(item);
    console.log(item.arrayRes.card.info);
    const every=cartArray.every((cartItem)=>cartItem.arrayRes.card.info.id !== item.arrayRes.card.info.id);
    if(every){
      dispatch(addItem(item));
    }else{
      alert("Item is already present in the cart")
    }
  }
  const {name,imageId,description,price,defaultPrice}=props?.arrayRes?.card?.info
  return (
    <div>
      <div className="card card-data mb-4 " >
        <div className="col g-0">
          <div className="inner-data menuDescription"  >
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><strong>Rs</strong> {price/100||defaultPrice/100}<small className="text-body-secondary"></small></p>
             
            </div>
            <div className="col-md-2 menu-img ">
            <img src={subMenuImg_Url+imageId} className="img-fluid rounded-start" alt="..." />
            <p className="cart-add" onClick={()=>handlingAddItem(props)}>Add</p> 
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubDataArray;
